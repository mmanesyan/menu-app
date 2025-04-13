import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuList from './components/MenuList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <MenuList />
      <Footer />
    </div>
  );
}

export default App;