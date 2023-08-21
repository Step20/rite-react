import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

export const Under2 = () => {
  return (
    <div className="under2-out">
      <Fade>
        <Container className="under-group mx-auto">
          <Row className="under-content mx-auto my-auto ">
            <Col
              xs="10"
              className="under-body animate__animated animate__fadeIn animate__delay-1s"
            >
              <h1>More Features as Your Team Grow.</h1>
            </Col>
            <Col className="under-body">
              <HashLink to="/features#top">
                {" "}
                <BsFillArrowRightCircleFill className="icon animate__animated animate__fadeIn animate__delay-1s" />{" "}
              </HashLink>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};
