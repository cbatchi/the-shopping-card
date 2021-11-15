import React from 'react';
import FirstWatchPicture from './images/watch_one.png';
import SecondWatchPicture from './images/watch_two.png';
import './styles/app.css';

const App = () => {
  return (
    <div className="card">
      <div className="card__cover">
        <img src={SecondWatchPicture} alt="" />
      </div>
      <div className="card__details">
        <div>
          <img src={FirstWatchPicture} alt="" />
          <h3>New Apple Watch</h3>
          <h2><span>$</span>450</h2>
          <a href="#!">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

export default App;