import React from "react";
import { Container, Row, InputGroup, FormControl } from "react-bootstrap";
import { ReusableButton } from "./ReusableButton";

export const TellUs = () => {
  return (
    <div>
      <Container fluid>
        <Row>Tell us about yourself.</Row>

        <Row>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text>I am a(n)</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Row>
        <Row>
          <ReusableButton title="Upload a video" />
        </Row>
        <Row>
          <br />
        </Row>
        <Row>How can we help?</Row>

        <Row>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text>Keywords</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Row>
        <Row>
          <ReusableButton title="Search" />
          {/* <MDBBtn size="lg" social="tw">
            <MDBIcon fab icon="twitter" />
          </MDBBtn> */}

          {/* <MDBIcon fas icon="comment-slash" /> */}
        </Row>
      </Container>
    </div>
  );
};
