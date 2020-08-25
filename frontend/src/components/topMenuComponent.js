import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/topMenuComponent.css'
import quiz from '../quiz.svg';

function TopMenu() {
  return (
    <div className="header">
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
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/quiz">Sınavı Başla</NavLink>
          <NavLink to="/login">Giriş</NavLink>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
