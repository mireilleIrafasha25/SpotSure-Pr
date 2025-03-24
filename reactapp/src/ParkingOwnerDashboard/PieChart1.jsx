import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'New', value: 62, color: '#FF4500' },       // Orange
  { name: 'Returning', value: 26, color: '#FF6347' }, // Light Orange
  { name: 'Inactive', value: 12, color: '#FF6A3D' }   // Beige
];

const PieChart1 = () => {
  return (
    <PieChart width={180} height={150}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={20}
        outerRadius={40}
        paddingAngle={5}
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Legend
        verticalAlign="middle"
        layout="vertical"
        align="left"
        iconType="circle"
        iconSize={8}
        wrapperStyle={{fontSize:'10px'}}
      />
    </PieChart>
  );
};

export default PieChart1;
