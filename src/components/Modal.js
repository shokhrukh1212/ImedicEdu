import { Modal } from "antd";
import AddAdminForm from "./AddAdminForm";

const PopupModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    //setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Add new admin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <AddAdminForm handleOk={handleOk} handleCancel={handleCancel} />
      </Modal>
    </>
  );
};
export default PopupModal;
