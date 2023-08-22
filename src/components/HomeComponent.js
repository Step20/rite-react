import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { Parallax } from "react-scroll-parallax";
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";
import home from "../assets/home.png";

export const Home = () => {
  return (
    <div className="home-out" id="home">
      <Container fluid className="home-content">
        <Row className="home-group">
          {" "}
          <Fade cascade="true" duration="1800">
            <Col xs="8" sm="6" className="home-left ">
              <div className="home-body animate__fadeInUp animate__delay-1s">
                <h1>
                  Manage Your<br></br>Big Project.
                </h1>
                <p className="my-5">
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at.{" "}
                </p>
                <div className="home-low animate__fadeInUp animate__delay-1s">
                  <h4>Get Started</h4>
                  <HashLink to="/features#top">
                    <div className="home-icon  mt-auto">
                      <BsFillArrowRightCircleFill className="icon" />
                      <div className="icon-bg"></div>
                    </div>
                  </HashLink>
                </div>
              </div>{" "}
            </Col>{" "}
          </Fade>
          <Col xs="4" sm="6" className="home-right ms-auto">
            <div class="parallax"> </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop className="scroll" smooth width="35" height="35" />
    </div>
  );
};
