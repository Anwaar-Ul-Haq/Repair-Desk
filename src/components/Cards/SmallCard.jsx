import React from "react";
import "./Cards.css";
import LineCard from "../LineCharts/LineChart";
import { Row, Col } from "reactstrap";

const SmallCard = (props) => {
  return (
    <div className="SmallCardMainWrapper">
      <Row>
        <Col sm="3" md="3" xs="3">
          <h6>Repair's Process</h6>
        </Col>
        <Col sm="6" md="6" xs="6"></Col>
        <Col sm="3" md="3" xs="3">
          <h6>4 Car's</h6>
        </Col>
      </Row>
      <Row>
        <Col sm="3" md="3" xs="3"></Col>
        <Col sm="6" md="6" xs="6">
          <LineCard />
        </Col>
        <Col sm="3" md="3" xs="3">
          <h6>12.5%</h6>
        </Col>
      </Row>
    </div>
  );
};
export default SmallCard;
