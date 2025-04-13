import React from 'react';
import './MenuItem.css';

function MenuItem({ item, onAddToOrder }) {
  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={`/images/${item.image}`} alt={item.name} />
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3>{item.name}</h3>
          <span className="price">${item.price.toFixed(2)}</span>
        </div>
        <p className="description">{item.description}</p>
        <button className="order-button" onClick={onAddToOrder}>
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItem;