import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import team from "../assets/team.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${team}) no-repeat fixed bottom;
    background-size: cover;
    color: #000;
    height: 200px;
    position: relative;
    z-index: -2;
    padding-left: 200;
    font-family: "Copperplate", Helvetica, sans-serif;
  }

  .overlay {
    background-color: #555;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Digital Innovation Lab</h1>
        <h3 style={{ "font-family": "Brush Script MT" }}>
          A place for your fervent spirit
        </h3>
      </Container>
    </Jumbo>
  </Styles>
);
