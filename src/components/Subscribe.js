import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

export class Subscribe extends Component {
  render() {
    return (
      <div style={{ display: "block", width: 200, padding: 0 }}>
        <Form onSubmit={() => alert("Subscribed to the newsletter.")}>
          <Form.Group>
            <Form.Control type="email" placeholder="your email address" />
          </Form.Group>
          <Button variant="light" type="submit" size="sm" block>
            Subscribe
          </Button>
        </Form>
      </div>
    );
  }
}
