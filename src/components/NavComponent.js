import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export const PageNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const mToggle = () => setModal(!modal);

  return (
    <div>
      {" "}
      <Navbar fluid expand="md" className="nav-page fixed-top" fixed="top" dark>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" mx-4 nav" navbar>
            {" "}
            <NavItem>
              <NavLink to="/features" href="/features" className="nav-text ">
                <span style={{ fontWeight: "bold" }}>Features</span>
              </NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink to="/" href="/" className="b">
                Pricing & Plans
              </NavLink>
            </NavItem>
          </Nav>{" "}
          <NavbarBrand href="/" className="mx-auto nav-title">
            rite.
          </NavbarBrand>
          <Button className=" mx-5 nav-btn" onClick={mToggle}>
            Sign Up
          </Button>{" "}
        </Collapse>
      </Navbar>
      <Modal isOpen={modal} toggle={mToggle}>
        <ModalHeader toggle={mToggle}>Sign Up</ModalHeader>
        <ModalBody>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <Label for="Username">Username</Label>
                <Input
                  id="Username"
                  name="username"
                  placeholder="Username"
                  type="username"
                />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>{" "}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={mToggle}
            style={{ backgroundColor: "#182ac7", borderRadius: "0px" }}
          >
            Submit
          </Button>{" "}
          <Button
            onClick={mToggle}
            style={{ backgroundColor: "#1b1a1a", borderRadius: "0px" }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
