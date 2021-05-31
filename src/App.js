import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/DashBoard";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

function App() {
  return (
    <Container fluid={true} className="App">
      <Row>
        <Col sm="2" md="2">
          {/* <Menu /> */}
        </Col>
        <Col sm="10" md="10">
          <Router>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
