import React, { useState } from "react";
import "./dashboard-styles/parkingSlots.css"
const slots=[
    { occupied: true, spaces: 1, side: "Left" },
    { occupied: false, spaces: 2, side: "Right" },
    { occupied: true, spaces: 1, side: "Left" },
]
const ParkingSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot, index) => {
    if (!slot.occupied) {
      setSelectedSlot({ ...slot, slotNumber: index + 1 });
    }
  };

  return (
    <div className="slots-container">
      <h2>Parking Availability</h2>
      <div className="slots-grid">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`slot ${slot.occupied ? "occupied" : "available"}`}
            onClick={() => handleSlotClick(slot, index)}
          >
            {slot.occupied ? "Occupied" : "Available"}
          </div>
        ))}
      </div>

      {selectedSlot && (
        <div className="slot-details">
          <h3>Slot Details</h3>
          <p><strong>Slot Number:</strong> {selectedSlot.slotNumber}</p>
          <p><strong>Spaces Available:</strong> {selectedSlot.spaces}</p>
          <p><strong>Side:</strong> {selectedSlot.side}</p>
          <button onClick={() => setSelectedSlot(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ParkingSlots;
