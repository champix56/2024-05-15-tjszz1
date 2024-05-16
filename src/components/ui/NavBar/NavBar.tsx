import React from "react";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js'
// import styles from "./NavBar.module.css";
interface INavBarProps {}

const Navbar: React.FC<INavBarProps> = () => {
  return (
    <NavBar bg="dark" data-bs-theme="dark">
      <Container>
        <NavBar.Brand href="#home">Home</NavBar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">thumbnail</Nav.Link>
          <Nav.Link href="#features">new</Nav.Link>
          <Nav.Link href="#pricing">edit/0</Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default Navbar;
