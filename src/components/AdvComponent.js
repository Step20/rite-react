import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Tilt from "react-vanilla-tilt";
import Fade from "react-awesome-reveal/Fade";

export const Adv = () => {
  return (
    <div className="adv-out">
      <Fade up>
        <Container className="adv-group ">
          <div className="adv-b">
            <Row className="adv-title text-center my-5 animate__animated animate__fadeInUp animate__delay-1s">
              <Col>
                <h1>Rite Advantages</h1>
                <p>
                  It is a long established fact that a reader will be reader are
                </p>
              </Col>
            </Row>
            <Row className="adv-content my-5 animate__animated animate__fadeInUp animate__delay-1s">
              <Col md="4" sm="12">
                <Tilt
                  options={{ max: 12 }}
                  style={{
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#272727",
                      color: "#fd0808",
                    },
                  }}
                  className="adv-card"
                >
                  <div className="adv-body mx-auto">
                    <h4>Help Your Team Succeed</h4>
                    <p>
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at.{" "}
                    </p>
                  </div>
                </Tilt>
              </Col>
              <Col md="4" sm="12">
                <Tilt
                  options={{ max: 12 }}
                  style={{
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#272727",
                      color: "#fd0808",
                    },
                  }}
                  className="adv-card"
                >
                  <div className="adv-body mx-auto">
                    <h4>Integrate With Top Work Tools</h4>
                    <p>
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at.{" "}
                    </p>
                  </div>
                </Tilt>
              </Col>
              <Col md="4" sm="12">
                <Tilt
                  options={{ max: 12 }}
                  style={{
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#272727",
                      color: "#fd0808",
                    },
                  }}
                  className="adv-card"
                >
                  <div className="adv-body mx-auto">
                    <h4>Work Together With Team</h4>
                    <p>
                      {" "}
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at.{" "}
                    </p>
                  </div>
                </Tilt>
              </Col>
            </Row>{" "}
          </div>
        </Container>
      </Fade>
    </div>
  );
};
