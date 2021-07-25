import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Services } from "./pages/Services";
import { Terms } from "./pages/Terms";
import LoginEmail from "./pages/LoginEmail";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { Jumbotron } from "./components/Banner";
import { NavigationBar } from "./components/NavigationBar";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    return data;
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router basename="/visual-design-and-web-project-armc244s7_2021-yonitacarter">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/loginemail" component={LoginEmail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/terms" component={Terms} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>

      <Footer />
    </React.Fragment>
  );
}

export default App;
