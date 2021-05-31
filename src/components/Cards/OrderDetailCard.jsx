import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";
import "./Cards.css";

import { FaRegUserCircle } from "react-icons/fa";

const OrderDetailCard = (props) => {
  return (
    <div className="ReportingCardMainWrapper">
      <Row>
        <Col sm="2" md="2">
          <div
            style={{
              fontSize: "20px",
              color: "#551f87",
              cursor: "pointer",
            }}
          >
            <FaRegUserCircle />
          </div>
        </Col>
        <Col sm="6" md="6">
          <div>
            <h4>Ordered</h4>
          </div>
        </Col>
        <Col sm="2" md="2">
          <div></div>
        </Col>
        <Col sm="2" md="2">
          <div>
            {" "}
            <h4>17</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="2" md="2">
          <div
            style={{
              fontSize: "20px",
              color: "#0e76a8",
              cursor: "pointer",
            }}
          >
            <FaRegUserCircle />
          </div>
        </Col>
        <Col sm="6" md="6">
          <div>
            <h4>Transit</h4>
          </div>
        </Col>
        <Col sm="2" md="2">
          <div></div>
        </Col>
        <Col sm="2" md="2">
          <div>
            {" "}
            <h4>11</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="2" md="2">
          <div
            style={{
              fontSize: "20px",
              color: "#f05b6c",
              cursor: "pointer",
            }}
          >
            <FaRegUserCircle />
          </div>
        </Col>
        <Col sm="6" md="6">
          <div>
            <h4>Delivered</h4>
          </div>
        </Col>
        <Col sm="2" md="2">
          <div></div>
        </Col>
        <Col sm="2" md="2">
          <div>
            {" "}
            <h4>2</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="6" md="6">
          <Button>Order Detail</Button>
        </Col>
        <Col sm="6" md="6"></Col>
      </Row>
      <div>
        <h5>Crank Shaft Order</h5>
      </div>
      <div>
        <h6>Order #53434 - Toyota Camry</h6>
      </div>

      <Row>
        <Col sm="2" md="2">
          <div>
            <p>X</p>
          </div>
        </Col>
        <Col sm="6" md="6">
          <div>
            <p>Drive Shaft-GLI-2019</p>
          </div>
        </Col>
        <Col sm="2" md="2">
          <div></div>
        </Col>
        <Col sm="2" md="2">
          <div>
            {" "}
            <p>$150</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="2" md="2">
          <div>
            <p>2X</p>
          </div>
        </Col>
        <Col sm="6" md="6">
          <div>
            <p>Shocks</p>
          </div>
        </Col>
        <Col sm="2" md="2">
          <div></div>
        </Col>
        <Col sm="2" md="2">
          <div>
            {" "}
            <p>$150</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default OrderDetailCard;
