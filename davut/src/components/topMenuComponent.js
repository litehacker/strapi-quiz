import React from 'react';
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
          <a href="//github.io/jo_geek" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank" rel="noopener noreferrer">Stackoverflow</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://codepen.io/jo_Geek/" target="_blank" rel="noopener noreferrer">Codepen</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" rel="noopener noreferrer">JsFiddle</a>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
