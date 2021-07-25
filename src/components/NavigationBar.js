import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
    .navbar {
        background-color = #555
        // fixed = 'top'
    }
    `;

export const NavigationBar = () => {
  const history = useHistory();
  return (
    <Styles>
      <Navbar expand="lg" color="light" bg="dark" variant="dark" sticky="top">
        <Nav.Link href="/dilab/#/">
          <Image src={logo} rounded height="50px" width="50px" alt="logo" />
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/dilab/#/services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/dilab/#/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/dilab/#/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/dilab/#/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/dilab/#/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
