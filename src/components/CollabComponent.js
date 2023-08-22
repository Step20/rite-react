import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Tilt from "react-vanilla-tilt";
import collab1 from "../assets/collab1.png";
import collab2 from "../assets/collab2.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Fade from "react-awesome-reveal/Fade";

export const Collab = () => {
  return (
    <div className="collab-out">
      {" "}
      <Fade up>
        <Container className="collab-group mx-auto">
          <div className="collab-b">
            <Row className="collab-title text-center my-2 animate__animated animate__fadeInUp animate__delay-1s">
              <Col className="mx-auto ">
                <h1>Power Collaboration</h1>
                <p className="mx-auto my-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has
                </p>
              </Col>
            </Row>
            <Row className="collab-p  mx-auto  text-center animate__animated animate__fadeInUp animate__delay-1s">
              <Col sm="5" xs="12" className=" mx-auto" xs="12">
                <div className="img-l" src={collab1} />
              </Col>
              <Col sm="7" xs="12" className="mx-auto">
                <div className="img-r" src={collab2} />
              </Col>
            </Row>
            <Row className="collab-text mx-auto ">
              <Col sm="3 ">
                <h3>Enterprise</h3>
              </Col>
              <Col sm="7" className=" mx-auto ">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum
                </p>
              </Col>
              <Col className="arrow-g ">
                <BsArrowUpRightCircle className="arrow me-auto" />
              </Col>
            </Row>
            <Row className="collab-text mx-auto my-5">
              <Col sm="3 ">
                <h3>Everything You Need</h3>
              </Col>
              <Col sm="7" className=" mx-auto ">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum
                </p>
              </Col>
              <Col className="arrow-g ">
                <BsArrowUpRightCircle className="arrow me-auto" />
              </Col>
            </Row>
            <Row className="collab-text mx-auto my-5 animate__animated animate__fadeInUp animate__delay-1s">
              <Col xs="3 ">
                <h3>No-code</h3>
              </Col>
              <Col xs="7" className=" mx-auto ">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum
                </p>
              </Col>
              <Col className="arrow-g ">
                <BsArrowUpRightCircle className="arrow me-auto" />
              </Col>
            </Row>
          </div>
        </Container>{" "}
      </Fade>
    </div>
  );
};
