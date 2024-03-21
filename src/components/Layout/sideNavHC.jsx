import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import {sideNavItemsHC} from "./data";
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';
import "./layout.scss"
import { FaPlusCircle } from "react-icons/fa";

const SideNavHC = () => {

    const [sideMenu, setSideMenu] = useState(false);

    const OpenMenu = () => {setSideMenu(!sideMenu)}

  return (
    <div id='sideNav' className={`sideNav ${sideMenu ? "sideMenu_open" : ""}`}>
        <div className="sideNav_logo">
            <Logo white />
        </div>
        <div className="sideNav_list">
            <ul>
                {
                    sideNavItemsHC.map(item => (
                        <li key={item.id}>
                            <Tooltip title={item.title} placement='right'>
                                <NavLink
                                to={item.link}
                                className={`${({ isActive }) => (isActive ? "active" : "")} sideNav_links`}
                            >
                                    <img src={item.icon} alt="icons" /><p>{item.title}</p>
                                </NavLink>
                            </Tooltip>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div onClick={OpenMenu} className="sideNav_icon">
            <FaPlusCircle />
        </div>
    </div>
  )
}

export default SideNavHC
