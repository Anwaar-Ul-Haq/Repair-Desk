import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row } from "reactstrap";
import "./LineChart.css";

const LineChart = ({ options }) => {
  const data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        fill: false,
        label: "",
        lineTension: 1,
        backgroundColor: "#fffff",
        borderColor: "#45f5ec",
        borderWidth: 2,
        data: [40, 30, 50, 81, 96, 50],
        backgroundColor: "transparent",
      },
    ],
  };

  const defaultOptions = {
    legend: {
      display: false,
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    layout: {
      padding: {
        top: 10,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      intersect: false,
      mode: "index",
      animationDuration: 0,
    },
    scales: {
      title: {
        display: false,
      },
      x: {
        gridLines: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };

  const customOptions = { ...defaultOptions, ...options };
  return (
    <div className="lineChart">
      <Line data={data} options={customOptions} />
    </div>
  );
};

export default LineChart;
