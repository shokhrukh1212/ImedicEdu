import { Modal } from "antd";
import AddAdminForm from "./AddAdminForm";

const PopupModal = ({ isModalOpen, setIsModalOpen, setData, name }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={`Add new ${name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <AddAdminForm
          handleOk={handleOk}
          handleCancel={handleCancel}
          setData={setData}
        />
      </Modal>
    </>
  );
};
export default PopupModal;
