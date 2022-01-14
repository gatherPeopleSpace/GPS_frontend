import React, { useState, useEffect } from "react";
import "../static/chart.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Chart = (props) => {
  const total = 60; //props.total
  const [dataList, setDataList] = useState([]);
  const [labelList, setLabelList] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/myMap/{userId}")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(1, res);
  //       setDataList(res.data);
  //      setLabelList(res.label);
  //     });
  // }, []);

  const data = {
    labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    datasets: [
      {
        backgroundColor: "rgb(255, 174, 0)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(210, 163, 211, 0.8)",
        data: [10, 12, 20, 32, 1, 8, 3, 0, 17, 2],
      },
    ],
  };

  const options = {
    legend: {
      display: false, // label 숨기기
    },
  };

  return (
    <div className="graph-container">
      <div className="graph">
        <Bar data={data} options={options} width={730} height={240} />
      </div>
    </div>
  );
};

export default Chart;
