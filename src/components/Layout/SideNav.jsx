import React from 'react'
import Logo from '../Logo/Logo'
import {sideNavItems} from "./data";
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';
import "./layout.scss"

const SideNav = () => {
  return (
    <div id='sideNav' className='sideNav'>
        <div className="sideNav_logo">
            <Logo white />
        </div>
        <div className="sideNav_list">
            <ul>
                {
                    sideNavItems.map(item => (
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
    </div>
  )
}

export default SideNav
