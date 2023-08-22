import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { Fade } from "react-awesome-reveal";

export const Under = () => {
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };

  return (
    <div className="under-out">
      <Container className="under-group mx-auto">
        <Fade>
          <Row className="under-content mx-auto my-auto text-center">
            <Col md="3" sm="6" xs="6" className="under-body ">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h1>{isVisible ? <CountUp end={49} /> : null}k +</h1>
                )}
              </VisibilitySensor>
              <p>Users</p>
            </Col>
            <Col md="3" sm="6" xs="6" className="under-body">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h1>
                    {isVisible ? <CountUp end={2} duration="6" /> : null}k +
                  </h1>
                )}
              </VisibilitySensor>
              <p>Subcribers</p>
            </Col>
            <Col md="3" sm="6" xs="6" className="under-body">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h1>{isVisible ? <CountUp end={198} /> : null} +</h1>
                )}
              </VisibilitySensor>
              <p>Country</p>
            </Col>
            <Col md="3" sm="6" xs="6" className="under-body">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h1>{isVisible ? <CountUp end={76} /> : null}%</h1>
                )}
              </VisibilitySensor>
              <p>Profit</p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};
