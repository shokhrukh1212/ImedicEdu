import React, { useState } from "react";
import {
  UsergroupAddOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
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
const MenuComponent = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  return (
    <>
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default MenuComponent;
