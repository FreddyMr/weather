import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardGrid from './Componments/CardGrid/CardGrid'
import Navbar from'./Componments/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CardGrid></CardGrid>
      
    </div>
  );
}

export default App;
