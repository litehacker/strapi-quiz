import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <div className="header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default Header;
