import React from 'react';
import SupportWidget from './Supportwidget';

const GetSupportButton = () => {
  const handleClick = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // Reba niba Tawk_API yabonetse
    } else {
      console.log('Tawk_API is not available yet.');
    }
  };

  return (
    <div>
      <SupportWidget />
    </div>
  );
};

export default GetSupportButton;
