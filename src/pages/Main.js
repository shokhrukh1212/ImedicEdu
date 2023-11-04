import AdminTable from "./AdminTable";
import UserTable from "./UserTable";
import MenuComponent from "./Menu";
import "../styles/main.css";
import { useState } from "react";

function Main() {
  const [isAdminTableVisible, setIsAdminTableVisible] = useState(true);

  return (
    <div className="container">
      <MenuComponent setIsAdminVisible={setIsAdminTableVisible} />
      {isAdminTableVisible && <AdminTable />}
      {!isAdminTableVisible && <UserTable />}
    </div>
  );
}

export default Main;
