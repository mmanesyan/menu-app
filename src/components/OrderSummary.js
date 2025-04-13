import React, { useState } from 'react';
import './OrderSummary.css';

function OrderSummary({ orderItems, removeFromOrder, increaseQuantity, totalPrice, onOrderPlaced }) {
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log('Order placed:', { 
      customerName, 
      tableNumber, 
      items: orderItems,
      totalAmount: totalPrice 
    });
    
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCheckout(false);
      onOrderPlaced();
      setCustomerName('');
      setTableNumber('');
    }, 3000);
  };

  return (
    <div className="order-summary">
      <h2>Your Order</h2>
      
      {orderPlaced ? (
        <div className="order-success">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
          <h3>Order Placed Successfully!</h3>
          <p>Thank you for your order, {customerName}.</p>
          <p>Your delicious food will be served to table {tableNumber} shortly.</p>
        </div>
      ) : (
        <>
          <div className="order-items">
            {orderItems.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-info">
                  <span className="order-item-name">{item.name}</span>
                  <span className="order-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="order-item-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => removeFromOrder(item.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          {!showCheckout ? (
            <button 
              className="checkout-button"
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          ) : (
            <form className="checkout-form" onSubmit={handlePlaceOrder}>
              <div className="form-group">
                <label htmlFor="customerName">Your Name</label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="tableNumber">Table Number</label>
                <input
                  type="number"
                  id="tableNumber"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  min="1"
                  max="50"
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setShowCheckout(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="place-order-button">
                  Place Order
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default OrderSummary;