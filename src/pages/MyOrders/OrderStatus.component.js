import React, { useState } from 'react';

const OrderStatus = () => {
  const [orderStatus, setOrderStatus] = useState('Processing');

  const cancelOrder = () => {
    setOrderStatus('Cancelled');
  };

  return (
    <div>
      <h2>Order Status</h2>
      <p>Status: {orderStatus}</p>
      {orderStatus === 'Processing' && (
        <button onClick={cancelOrder}>Cancel Order</button>
      )}
    </div>
  );
};

export default OrderStatus;