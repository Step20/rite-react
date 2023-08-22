import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <div className="footer-out">
      {" "}
      <Fade up>
        <Container className="footer-group mx-auto">
          <div className="footer-b">
            <Row className="footer-content  ">
              <Col className="footer-brand my-auto   ">
                <h1>rite</h1>
              </Col>
              <Col className="footer-text  my-auto   ">
                <ul>
                  <li>Features</li>
                  <li>Solutions</li>
                  <li>Pricing & Plans</li>
                </ul>
              </Col>
              <Col className="footer-icons  my-auto  ">
                <ul>
                  <li>
                    <AiOutlineGoogle className="icon" />
                  </li>
                  <li>
                    <AiFillYoutube className="icon" />
                  </li>
                  <li>
                    <FaFacebookF className="icon " />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </Fade>
    </div>
  );
};
