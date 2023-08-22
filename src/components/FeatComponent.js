import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

export const FeatCom = () => {
  return (
    <div className="under2-out" id="top">
      <Fade up>
        <Container className="under-group mx-auto">
          <Row className="under-content mx-auto my-auto text-center">
            <Col xs="12" className="under-body   s">
              <h1 style={{ fontSize: "calc(5rem + 7vw)" }}>Features</h1>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};
