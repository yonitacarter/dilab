import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Register extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    social: "",
  };

  addUser = async () => {
    const user = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      social: this.state.social,
    };

    const res = await fetch("https://my-json-server.typicode.com/harchharchi/blab2/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    alert("new user added.");
  };

  render() {
    return (
      <div
        style={{
          display: "block",
          margin: "0 auto",
          width: 450,
          border: "2px solid #000000",
          padding: 40,
        }}
      >
        <h4>Register</h4>
        <br />
        <Form onSubmit={this.addUser}>
          <Form.Group>
            <Form.Label>Enter your full name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={this.state.fullName}
              required
              onChange={(e) => this.setState({ fullName: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter your email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              required
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter your password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create Password"
              value={this.state.password}
              required
              minLength={6}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter your preferred social media URL:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Preferred Social Media URL"
              value={this.state.social}
              onChange={(e) => this.setState({ social: e.target.value })}
            />
          </Form.Group>

          <Button variant="dark" type="submit" block>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
