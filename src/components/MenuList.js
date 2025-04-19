import React, { useState } from 'react';
import './MenuList.css';
import MenuItem from './MenuItem';
import OrderSummary from './OrderSummary';

function MenuList() {
  const [orderItems, setOrderItems] = useState([]);
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const menuItems = [
    {
      id: 1,
      category: 'starters',
      name: 'Garlic Bread',
      description: 'Fresh bread with garlic butter, topped with mozzarella',
      price: 5.99,
      image: 'garlic.jpg'
    },
    {
      id: 2,
      category: 'starters',
      name: 'Bruschetta',
      description: 'Grilled bread rubbed with garlic and topped with tomatoes, olive oil and herbs',
      price: 6.99,
      image: 'bruschetta.jpg'
    },
    {
      id: 3,
      category: 'mains',
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
      price: 12.99,
      image: 'margherita.jpg'
    },
    {
      id: 4,
      category: 'mains',
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti with creamy sauce, pancetta, and parmesan cheese',
      price: 14.99,
      image: 'carbonara.jpg'
    },
    {
      id: 5,
      category: 'desserts',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with mascarpone, coffee, and cocoa',
      price: 7.99,
      image: 'tiramisu.jpg'
    },
    {
      id: 6,
      category: 'desserts',
      name: 'Panna Cotta',
      description: 'Creamy Italian dessert with vanilla and berry compote',
      price: 6.99,
      image: 'panna-cotta.jpg'
    },
    {
      id: 7,
      category: 'desserts',
      name: 'Chocolate Fondant',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      price: 8.99,
      image: 'chocolate-fondant.jpg'
    },
    {
      id: 8,
      category: 'desserts',
      name: 'Cannoli',
      description: 'Sicilian pastry tubes filled with sweet ricotta cream and chocolate chips',
      price: 6.49,
      image: 'cannoli.jpg'
    },
    {
      id: 9,
      category: 'desserts',
      name: 'Gelato Selection',
      description: 'Choice of three scoops: vanilla, chocolate, pistachio, or strawberry',
      price: 5.99,
      image: 'gelato.webp'
    },
    {
      id: 10,
      category: 'drinks',
      name: 'Red Wine',
      description: 'House selection of Italian red wine (glass)',
      price: 8.99,
      image: 'red-wine.png'
    }
  ];

  const starters = menuItems.filter(item => item.category === 'starters');
  const mains = menuItems.filter(item => item.category === 'mains');
  const desserts = menuItems.filter(item => item.category === 'desserts');
  const drinks = menuItems.filter(item => item.category === 'drinks');

  const addToOrder = (item) => {
    const existingItem = orderItems.find(orderItem => orderItem.id === item.id);
    
    if (existingItem) {
      setOrderItems(orderItems.map(orderItem => 
        orderItem.id === item.id 
          ? { ...orderItem, quantity: orderItem.quantity + 1 } 
          : orderItem
      ));
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
    setIsOrderVisible(true);
  };

  const removeFromOrder = (itemId) => {
    const updatedOrderItems = orderItems
      .map(item => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; 
          }
        }
        return item;
      })
      .filter(item => item !== null); 
    setOrderItems(updatedOrderItems);
  
    if (updatedOrderItems.length === 0) {
      setIsOrderVisible(false);
    }
  };
  

  const getOrderItemCount = () => {
    return orderItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const findMenuItem = (id) => {
    return menuItems.find(item => item.id === id);
  };
  const increaseQuantity = (itemId) => {
    const item = findMenuItem(itemId);
    if (item) {
      addToOrder(item);
    }
  };

  const handleOrderPlaced = () => {
    setOrderItems([]);
    setIsOrderVisible(false);
  };

  return (
    <div className="menu-container">
      {getOrderItemCount() > 0 && (
        <button 
          className="view-order-button" 
          onClick={() => setIsOrderVisible(!isOrderVisible)}
        >
          {isOrderVisible ? 'Hide Order' : `View Order (${getOrderItemCount()} items)`}
        </button>
      )}
      
      {isOrderVisible && orderItems.length > 0 && (
        <OrderSummary 
          orderItems={orderItems} 
          removeFromOrder={removeFromOrder}
          increaseQuantity={increaseQuantity}
          totalPrice={getTotalPrice()}
          onOrderPlaced={handleOrderPlaced}
        />
      )}
    
      <section id="starters" className="menu-section">
        <h2>Starters</h2>
        <div className="menu-items">
          {starters.map(item => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToOrder={() => addToOrder(item)}
            />
          ))}
        </div>
      </section>

      <section id="mains" className="menu-section">
        <h2>Main Course</h2>
        <div className="menu-items">
          {mains.map(item => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToOrder={() => addToOrder(item)}
            />
          ))}
        </div>
      </section>

      <section id="desserts" className="menu-section">
        <h2>Desserts</h2>
        <div className="menu-items">
          {desserts.map(item => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToOrder={() => addToOrder(item)}
            />
          ))}
        </div>
      </section>

      <section id="drinks" className="menu-section">
        <h2>Drinks</h2>
        <div className="menu-items">
          {drinks.map(item => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToOrder={() => addToOrder(item)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuList;