import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Roulette from './components/Roulette';

function App() {
  const [chips, setChips] = useState(1000);

  const handleChipsChange = (newChips) => {
  
    setChips(newChips);
  }
  return (
    <div className="App">
      <Header chips={chips} />
      <Roulette chips={chips} onChipsChange={handleChipsChange} />
    </div>
  );
}

export default App;
