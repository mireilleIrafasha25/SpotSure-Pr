import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SmallRadialChart = () => {
  const percentage = 15; // Percentage urimo
  return (
    <div style={{ width: 30, height: 40 }}> {/* Hindura width na height hano niba ushaka kugabanya */ }
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '20px',
          pathColor: '#022F4A',  // circle color(darkblue)
          trailColor: '#E8D9F1',  // outside  color cirlce
          textColor: '#000',     // between color
        })}
      />
    </div>
  );
};

export default SmallRadialChart;
