import React from "react";
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import { TellUs } from "../components/TellUs.js";
import { TrendingTopics } from "../components/TrendingTopics";
import { Follow } from "../components/Follow";

export const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="3">
            <Follow />
          </Col>
          <Col md="6">
            <TrendingTopics />
          </Col>
          <Col md="3">
            <TellUs />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
