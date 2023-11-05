import React, { useState } from "react";
import {
  UsergroupAddOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
import "../styles/menu.css";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Home", "0", <HomeOutlined />),
  getItem("Admin", "1", <UserOutlined />),
  getItem("Users", "2", <UsergroupAddOutlined />),
  getItem("Calendar", "3", <CalendarOutlined />),
  getItem("Settings", "4", <SettingOutlined />),
];
const MenuComponent = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const navigate = useNavigate();

  function handleClick({ item, key, keyPath, domEvent }) {
    if (key === "0") {
      navigate("/");
    }

    if (key === "1") {
      navigate("/admin");
    }

    if (key === "2") {
      navigate("/user");
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
          fontFamily: "EB Garamond, serif",
          fontSize: "1.3rem",
        }}
        defaultOpenKeys={["sub1"]}
        theme={theme}
        items={items}
        onClick={handleClick}
      />
    </div>
  );
};
export default MenuComponent;
