import "./dashboard-styles/barchart.css"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function SimpleBarChart() {
  return (
    <BarChart
      width={300}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={10}
      
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="pv" fill="#FF4500" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
