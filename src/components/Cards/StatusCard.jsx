import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import SmallCard from "../Cards/SmallCard";
import "./Cards.css";
import { FaCheck } from "react-icons/fa";

const StausCard = (props) => {
  return (
    <div className="StatusCardMainWrapper">
      <div>
        <Row>
          <Col sm="3" md="3">
            <h5>Status</h5>
            <Row>
              <Col sm="3" md="3">
                <div style={{ color: "#9933ff" }}>
                  <FaCheck />
                </div>
              </Col>
              <Col sm="8" md="8">
                <p style={{ backgroundColor: "#9933ff", color: "#ffff" }}>
                  To Do
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="3" md="3">
                <div style={{ color: "#ff3399" }}>
                  <FaCheck />
                </div>
              </Col>
              <Col sm="8" md="8">
                <p style={{ backgroundColor: "#ff3399", color: "#ffff" }}>
                  Pending
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="3" md="3">
                <div style={{ color: "#ff6600" }}>
                  <FaCheck />
                </div>
              </Col>
              <Col sm="8" md="8">
                <p style={{ backgroundColor: "#ff6600", color: "#ffff" }}>
                  InProgress
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="3" md="3">
                <div style={{ color: "#33cc33" }}>
                  <FaCheck />
                </div>
              </Col>
              <Col sm="8" md="8">
                <p style={{ backgroundColor: "#33cc33", color: "#ffff" }}>
                  Completed
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm="3" md="3">
            <h5>InProgress</h5>
            <div>
              <SmallCard />
            </div>
          </Col>
          <Col sm="3" md="3">
            <h5>Completed</h5>
            <SmallCard />
          </Col>
          <Col sm="3" md="3">
            <h5>Pending</h5>
            <SmallCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default StausCard;
