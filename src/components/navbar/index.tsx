import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NavBarApp() {
  const [getUser, setUser] = useState({userImageUrl:"", acronym:""});

  async function getUsers() {
    const dataUser = await axios.get("https://randomuser.me/api/");
    const { data } = dataUser;
    const { results } = data;
    const [user] = results;
    setUser({
      userImageUrl: user.picture.medium,
      acronym: user.name.first.slice(0,1) + user.name.last.slice(0,1),
    });
  }
    
  useEffect(() => {
    getUsers()
  }, [getUser])
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Movies Api</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {Routes.map((route) => {
            const { path, name } = route;
            return <Link to={path}> {name} </Link>;
          })}
        </Nav>
          <Nav>
          <Navbar.Brand>{getUser.acronym}</Navbar.Brand>
          <img src={getUser.userImageUrl} style={{borderRadius:"50%",border:"1px solid black",height:"50px",width:"50px"}} className="offset-lg-3"></img>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
