import React from 'react';
import quiz from '../quiz.svg';

function Header() {
  return (
    <div className="header">
      <header>
        <img src={quiz} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default Header;
