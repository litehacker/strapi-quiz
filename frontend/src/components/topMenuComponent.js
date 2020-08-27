import React from 'react';
import quiz from '../quiz.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

//
function TopMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="/"><img src={quiz} className="App-logo" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/deneme-sınavı">Sınavı Başla</Nav.Link>
          <Nav.Link href="/hakkımızda">Hakkımızda</Nav.Link>
          <NavDropdown title="Sınav Kılavuzu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Ödeme Nasıl Yapılır?</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Deneme Sınavına Kayıdı</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Deneme Sınavı Rehberi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Deneme Sınavı Rehberi</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">Üyelik Sözleşmesi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Kullanım Koşulları</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Kişisel Verilerin Korunması</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="login">Giriş Yap</Nav.Link>
          <Nav.Link href="bize-ulaş">Bize Ulaş</Nav.Link>
        </Nav>
      </Navbar.Collapse>
</Navbar>
  );
}

export default TopMenu;
