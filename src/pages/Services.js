import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReusableCard } from "../components/ReusableCard";

export const Services = () => {
  return (
    <div>
      <h1>Services</h1>

      <Container>
        <Row>
          <Col>
            <ReusableCard
              title="Gold Lab"
              text="an inspiring lab"
              src={require("../assets/lab4.jpg")}
            />
          </Col>
          <Col>
            <ReusableCard
              title="Silver Lab"
              text="a very good lab"
              src={require("../assets/lab3.jpg")}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <ReusableCard
              title="Titanium Lab"
              text="a great lab"
              src={require("../assets/lab2.jpg")}
            />
          </Col>
          <Col>
            <ReusableCard
              title="Copper Lab"
              text="a nice lab"
              src={require("../assets/lab1.jpg")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
