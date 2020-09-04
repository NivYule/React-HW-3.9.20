import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Routes } from '../../routes'
import { Link } from "react-router-dom";

export default function NavBarApp() {
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand>Movies Api</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {Routes.map((route) => {
                    const { path, name } = route;
                    return <Link to={path}> {name} </Link>
                })}
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
}