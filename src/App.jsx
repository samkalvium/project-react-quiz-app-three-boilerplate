import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage.jsx';
import Mainpage from './Components/Mainpage.jsx';
import Resultpage from './Components/Resultpage.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  const handleCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route
            path='/mainpage'
            element={<Mainpage scoreUpdate={handleScore} countUpdate={handleCount} />}
          />
          <Route path='/results' element={<Resultpage score={score} count={count} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;