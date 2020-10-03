import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link
              to="/"
              style={{ color: "inherit", "text-decoration": "none" }}
            >
              Market Go Brr
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link
                  to="/about"
                  style={{ color: "inherit", "text-decoration": "none" }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/analysis"
                  style={{ color: "inherit", "text-decoration": "none" }}
                >
                  Analysis
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
