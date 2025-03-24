import React, { useEffect } from 'react';

const SupportWidget = () => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {}; // Define Tawk_API muri global scope
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/67af3fed0bc1aa1a2cb09644/1ik293fun';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default SupportWidget;
