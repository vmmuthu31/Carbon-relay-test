import React from 'react';

export default function RowPopup({ rowData, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Row Data</h2>
        <p>{rowData}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
