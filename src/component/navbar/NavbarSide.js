import React, { useState } from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";
import ModalLogout from "../modal/ModalLogout";


export default function NavbarSide() {
    const [modalShow, setModalShow] = useState(false);
    const accessToken = localStorage.getItem("access_token") || null;


    const handleButtonClick = () => {
        setModalShow(true);
    }

    const handleModalClose = () => {
        setModalShow(false);
    }

    return (
        <div className="navbar-side">
            <CDBSidebar textColor="#fff" backgroundColor="var(--backgroundPrimary)">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        iRead
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    {accessToken ? (
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem>Back to Homepage</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/dashboard" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/categories" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="book">Categories</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/savedbook" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-bookmark">Saved</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/createbook" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="sticky-note">Write New Book</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    ) : (
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem>Back to Homepage</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/login" activeClassName="activeClicked">
                                <CDBSidebarMenuItem>Login</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    )}
                </CDBSidebarContent>
                {accessToken ? (
                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div>
                            <Button onClick={handleButtonClick}>Logout</Button>
                        </div>
                        <ModalLogout show={modalShow} onHide={handleModalClose} />
                    </CDBSidebarFooter>
                ) : (
                    <div></div>
                )}
            </CDBSidebar>
        </div>
    )
}