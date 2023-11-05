import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const AddAdminForm = ({ handleCancel, handleOk, setData }) => {
  const [form] = Form.useForm();

  // once all necessary areas are filled
  const onFinish = (values) => {
    const { name, age, email, phone } = values.user;
    setData((data) => [
      {
        key: name,
        name,
        age,
        email,
        phoneNumber: `+998 ${phone}`,
      },
      ...data,
    ]);

    handleOk();
    form.resetFields();
  };

  const validatePhone = (rule, value, callback) => {
    if (value.toString().length !== 9) {
      callback("Please, enter a valid phone number");
    } else {
      callback();
    }
  };

  return (
    <Form
      {...layout}
      name="admin"
      form={form}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      {/* name */}
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* email */}
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* phone number */}
      <Form.Item
        name={["user", "phone"]}
        label="Phone number"
        rules={[
          {
            required: true,
            validator: validatePhone,
          },
        ]}
      >
        <Input addonBefore={"+998"} />
      </Form.Item>

      {/* age */}
      <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      {/* Cancel and Reset Button */}

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
        style={{ marginTop: 20 }}
      >
        <Button style={{ marginRight: 10 }} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddAdminForm;
