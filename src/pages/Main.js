import AdminTable from "./AdminTable";
import UserTable from "./UserTable";
import MenuComponent from "./Menu";
import "../styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function Main() {
  return (
    <div className="container">
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="/admin" element={<AdminTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
