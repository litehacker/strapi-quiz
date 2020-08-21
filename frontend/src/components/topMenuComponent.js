import React from 'react';
import {Link} from 'react-router-dom';
import '../css/topMenuComponent.css'
import quiz from '../quiz.svg';

function TopMenu() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            <img src={quiz} className="App-logo" alt="logo" />
          </div>
        </div>

        <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
        </div>

        <div className="nav-links">
          <Link to="/">Anasayfa</Link>
          <Link to="/quiz">Sınavı Başla</Link>
          <Link to="/login">Giriş</Link>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
