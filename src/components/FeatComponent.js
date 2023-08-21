import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

export const FeatCom = () => {
  return (
    <div className="under2-out" id="top">
      <Fade>
        <Container className="under-group mx-auto">
          <Row className="under-content mx-auto my-auto text-center">
            <Col
              xs="12"
              className="under-body animate__animated animate__fadeIn animate__delay-1s"
            >
              <h1 style={{ fontSize: "calc(5rem + 7vw)" }}>Features</h1>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};
