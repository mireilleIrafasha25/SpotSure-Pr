import React from "react";

const SoundTest = () => {
  const playSound = () => {
    const audio = new Audio("/Ross.mp3"); // Path ya sound
    audio.play();
  };

  return (
    <div>
      <h1>Play Sound in React</h1>
      <button onClick={playSound}>Play Sound</button>
    </div>
  );
};

export default SoundTest;
