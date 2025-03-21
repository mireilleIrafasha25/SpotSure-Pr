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
          pathColor: '#D83CF6',  // Ibara rya stroke ryo hejuru (Purple)
          trailColor: '#E8D9F1',  // Ibara ry’uruziga rw’inyuma
          textColor: '#000',     // Ibara ry’inyuguti hagati
        })}
      />
    </div>
  );
};

export default SmallRadialChart;
