import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      style={{
        backgroundColor: "#080808",
      }}
      variant="dark"
      expand="md"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml">
          &nbsp; &nbsp;
          <div>
            <Link
              to="/"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                Home
              </p>
            </Link>
          </div>
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          <div>
            <Link
              to="/about"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                About
              </p>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
