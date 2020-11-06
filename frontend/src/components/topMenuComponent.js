import React, {useState, useEffect}from 'react';
import quiz from '../quiz.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

import AuthService from "../services/auth.service";


//
function TopMenu() {
  const [currentUser] = useState(AuthService.getCurrentUser());
  const history = useHistory();

  useEffect(() => {
    if (currentUser)
      document.title = 'Merhaba ' + currentUser.user.username;
  });
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" >
      <div className="container">

        <Navbar.Brand href="/"><img src={quiz} className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/deneme-sinavlari">Sınavlar</Nav.Link>
            {
              currentUser!=null && <Nav.Link href="/deneme-sinavi">Sınavı Başla</Nav.Link>
            }
            
            <Nav.Link href="/hakkımızda">Hakkımızda</Nav.Link>
            
            <NavDropdown title="Sınav Kılavuzu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ödeme Nasıl Yapılır?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Deneme Sınavına Kayıdı</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deneme Sınavı Rehberi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deneme Sınavı Rehberi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Üyelik Sözleşmesi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kullanım Koşulları</NavDropdown.Item>
              <NavDropdown.Item href="kisisel-veri-korunmasi">Kişisel Verilerin Korunması</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            { !currentUser ? <Nav.Link href="login">Giriş Yap</Nav.Link>:<Nav.Link onClick={()=> AuthService.logout(history)}> Çıkış Yap</Nav.Link>  }
            <Nav.Link href="iletisim">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default TopMenu;
