import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SmallCards from "../Cards/SmallCard";
import ReportingCard from "../Cards/ReportingCard";
import "./dashboard.css";
import OrderDetailCard from "../Cards/OrderDetailCard";
import StatusCard from "../Cards/StatusCard";

const DashBoard = (props) => {
  return (
    <>
      <div className="MainWrapper">
        <Container fluid={true}>
          <Row>
            <Col md="8" sm="6" xs="6">
              <Row className="row">
                {[1, 2, 3, 4].map((item, index) => (
                  <div className="cardWrapper">
                    <SmallCards key={index} />
                  </div>
                ))}
              </Row>
              <div>
                <Row className="SecondryWrapper">
                  <Col md="6" sm="6" xs="6">
                    <ReportingCard />
                  </Col>
                  <Col md="6" sm="6" xs="6">
                    <OrderDetailCard />
                  </Col>
                </Row>
              </div>

              <div>
                <Row className="SecondryWrapper">
                  <Col md="12" sm="12" xs="12">
                    <StatusCard />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md="4" sm="6" xs="6">
              <div>
                <Row className="SecondryWrapper">
                  <Col md="12" sm="12" xs="12">
                    <ReportingCard />
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="SecondryWrapper">
                  <Col md="12" sm="12" xs="12">
                    <ReportingCard title="Hello" text="Hello World" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default DashBoard;
