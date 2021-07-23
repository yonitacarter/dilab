import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

class LoginEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      social: "",
    };
  }

  fetchUsers = async () => {
    // const res = await fetch("http://localhost:5000/users");
    const res = await fetch("https://my-json-server.typicode.com/harchharchi/blab2/users"); 
    const data = await res.json();

    return data;
  };

  componentDidMount() {
    this.all_users = this.fetchUsers();
    console.log(this.all_users);
  }
  componentDidUpdate() {}

  fetchUsers = async () => {
    // const res = await fetch("http://localhost:5000/users");
    const res = await fetch("https://my-json-server.typicode.com/harchharchi/blab2/users");
    const data = await res.json();

    return data;
  };

  login = (e) => {
    this.all_users.then((u) => {
      const valid = u.filter(
        (u) =>
          u.email === this.state.email && u.password === this.state.password
      );

      if (valid.length !== 0) {
        console.log("logging in");

        this.props.history.push("/services");
      } else {
        alert("login failed.");
      }
    });
  };

  render() {
    return (
      <div
        style={{ display: "block", width: 450, padding: 20, margin: "0 auto" }}
      >
        <h4>Login by Email</h4>
        <Form onSubmit={this.login}>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="e.g. me@mycompany.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>

          <Button variant="dark" type="submit" block>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(LoginEmail);
