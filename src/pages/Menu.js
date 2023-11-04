import React, { useState } from "react";
import {
  UsergroupAddOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
import "../styles/menu.css";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Admin", "1", <UserOutlined />),
  getItem("Users", "2", <UsergroupAddOutlined />),
  getItem("Calendar", "3", <CalendarOutlined />),
  getItem("Settings", "4", <SettingOutlined />),
];
const MenuComponent = ({ setIsAdminVisible }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  function handleClick({ item, key, keyPath, domEvent }) {
    console.log(key);
    if (key === "1") {
      setIsAdminVisible(true);
    }

    if (key === "2") {
      setIsAdminVisible(false);
    }
  }

  return (
    <div className="menu-container">
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{
          width: 200,
          minHeight: "100vh",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        theme={theme}
        items={items}
        onClick={handleClick}
      />
    </div>
  );
};
export default MenuComponent;
