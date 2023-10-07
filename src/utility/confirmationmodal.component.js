import React from 'react';

const ConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure to cancel the order?</p>
        <button onClick={onClose}>No</button>
        <button onClick={onConfirm}>Yes</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
