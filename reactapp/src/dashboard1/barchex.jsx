import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "JAN", value: 100000 },
  { name: "FEB", value: 300000 },
  { name: "MAR", value: 200000 },
  { name: "APR", value: 400000 },
  { name: "MAY", value: 250000 },
  { name: "JUN", value: 350000 },
  { name: "JUL", value: 150000 },
  { name: "AUG", value: 370000 },
  { name: "SEP", value: 220000 },
  { name: "OCT", value: 300000 },
  { name: "NOV", value: 450000 },
  { name: "DEC", value: 400000 }
];

// Custom bar that splits color based on value
const CustomBar = ({ fill, x, y, width, height, value }) => {
  const blueHeight = (height * value) / 500000; // Adjust to your max value
  return (
    <g>
      {/* Blue Part */}
      <rect x={x} y={y + height - blueHeight} width={width} height={blueHeight} fill="#0000FF" />
      {/* Skyblue Part */}
      <rect x={x} y={y} width={width} height={height - blueHeight} fill="#87CEFA" />
    </g>
  );
};

const SimpleBarChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" shape={<CustomBar />} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
