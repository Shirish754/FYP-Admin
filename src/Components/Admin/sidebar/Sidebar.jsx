import "./sidebar.css";
import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { Link } from "react-router-dom";
import LogOut from "../LogOut";


export default function Sidebar() {
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
          <MdIcons.MdDashboard />
            Dashboard
          </h3>
          <ul className="sidebarList">
          <Link to="/" className="text-decoration-none">
              <li className="sidebarListItem">
                < FaIcons.FaHome className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="text-decoration-none">
              <li className="sidebarListItem">
                < FaIcons.FaUserAlt className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="text-decoration-none">
              <li className="sidebarListItem">
                <FaIcons.FaProductHunt className="sidebarIcon" />
                Products
              </li>
            </Link >
            <Link to="/Orders" className="text-decoration-none">
              <li className="sidebarListItem" >
                <FaIcons.FaBimobject className="sidebarIcon" />
                Orders
              </li>
            </Link >
            <div className="text-danger">
            <li onClick={() => { setIsLogOutOpen(true); }} className="sidebarListItem" style={{color:"red"}}>
                <FaIcons.FaSignOutAlt/>
                Logout
              </li>
              <LogOut open={isLogOutOpen} onClose={() => { setIsLogOutOpen(false) }}  />
            </div>
              
          </ul>
        </div>
        
      </div>
    </div>
  );
}
