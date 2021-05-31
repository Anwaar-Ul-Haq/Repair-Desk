import React, { Component } from "react";
import Dashboard from "../components/DashBoard";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#fffff" }}>
        <Dashboard />
      </div>
    );
  }
}

export default Home;
