
import React from 'react'
import './style.css'
import {
    FaTimes,
} from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
import { SidebarData } from '../SidebarData/SidebarData'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <>
            <div className="container">
                <div className="Sidebar">
                    <FaTimes onClick={closeSidebar} />
                    <ul className='sidebarList'>
                        {
                            SidebarData.map(
                                (val, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className='row'
                                            onClick={() =>
                                                window.location.pathname = val.links}>
                                            <div id='icons'>
                                                {val.icons}
                                            </div>
                                            <div id='title'>{val.title}</div>

                                        </li>

                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar