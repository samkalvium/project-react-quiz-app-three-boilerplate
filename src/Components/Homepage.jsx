import React, { Component } from 'react'
import '../Components/game.css'
import { Link } from 'react-router-dom';

export default class Homepage extends Component {

  render() {
    return (
      <div className='home-body'>
        <h1>Quiz App</h1>
        <Link to="/mainpage">
          <button className='play-btn'>Play</button>
        </Link>

      </div>
    )
  }
}
