import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  FloatButton,
  Spin,
} from "antd";
import "../styles/table.css";
import { PlusOutlined } from "@ant-design/icons";
import PopupModal from "../components/Modal";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === "number" ? (
      <InputNumber style={{ width: "100%" }} />
    ) : (
      <Input />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableComponent = ({ size }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    setIsLoading(true);
    async function fetchUsers() {
      const res = await fetch(
        `https://random-data-api.com/api/v2/users?size=${size}`
      );
      const data = await res.json();
      console.log("Data: ", data);
      const readyData = [];
      data.map((personData) => {
        const personDateYear = new Date(personData.date_of_birth).getFullYear();
        const currentYear = new Date().getFullYear();
        readyData.push({
          key: personData.id,
          name: `${personData.first_name} ${personData.last_name}`,
          phoneNumber: personData.phone_number,
          email: personData.email,
          age: currentYear - personDateYear,
        });
      });

      setData(readyData);
      setIsLoading(false);
    }

    fetchUsers();
  }, [size]);

  // Edit functionality
  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      phoneNumber: "",
      email: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  // Cancel functionality
  const cancel = () => {
    setEditingKey("");
  };

  // Save functionality
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  // Open modal when I click add icon
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: "10%",
      editable: true,
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      width: "25%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "25%",
      editable: true,
    },
    {
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  // Merging colums
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "age"
            ? "number"
            : col.dataIndex === "phoneNumber"
            ? "number"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  // Returning a JSX
  return (
    <>
      {!isLoading ? (
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
            className="admin-table-form"
            pagination={{
              onChange: cancel,
              pageSize: 8,
            }}
          />
          <FloatButton
            icon={<PlusOutlined />}
            type="primary"
            tooltip={<div>Add new admin</div>}
            style={{ right: 45 }}
            onClick={handleClick}
          />
        </Form>
      ) : (
        <Spin size="large" className="spinner" />
      )}

      <PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
export default TableComponent;
