import React from "react";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import FlexH3Grow from "../../layout/FlexH3Grow/FlexH3Grow.js";
import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";
import { LinkContainer } from "react-router-bootstrap";
interface INavBarProps {}

const Navbar: React.FC<INavBarProps> = () => {
  return (
    <NavBar bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/home">
          <NavBar.Brand>Home</NavBar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/thumbnail">
            <Nav.Link>thumbnail</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/new">
            <Nav.Link>new</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/edit/0">
            <Nav.Link>edit/0</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default Navbar;
