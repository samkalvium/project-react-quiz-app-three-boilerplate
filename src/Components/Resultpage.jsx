import React from 'react';
import { Link } from 'react-router-dom';

const Resultpage = ({ score, count }) => {
  return (
    <div>
      <h1 className='res'>Result</h1>
      <div className='result-body'>
        <h3>You need more practice</h3>
        <h1>Your score is {score}</h1>
        <div className='flex-result'>
          <div>
            <h5>Total number of questions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
          </div>
          <div>
            <h5>15</h5>
            <h5>{count-1}</h5>
            <h5>{score}</h5>
            <h5>{15 - score}</h5>
          </div>
        </div>
      </div>
      <div className='buttons-move'>
        <Link to='/mainpage'>
          <button className='ply-again'>Play Again</button>
        </Link>
        <Link to='/'>
          <button className='back-home'>Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Resultpage;
