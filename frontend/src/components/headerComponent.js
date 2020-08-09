import React from 'react';
import TopMenu from './topMenuComponent.js';

function Header() {
  return (
    <div className="header">
      <header>
        <TopMenu/>
      </header>
    </div>
  );
}
// systemctl stop nginx
// /opt/letsencrypt/certbot-auto renew
// systemctl start nginx
export default Header;
