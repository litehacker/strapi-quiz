import React from 'react';
import Button from "react-bootstrap/Button"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
//import SignupForm from "./auth/signup.component"
//import LoginForm from "./auth/login.component"

function FormComponent(){
    return(
        <>
        <Tabs defaultActiveKey="register" id="uncontrolled-tab-example">
            <Tab eventKey="register" title="Kaydol">
            <form id="contact-form">
                <div className="contact-top">
                    <h3 className="contact-title p-2">Ücretsiz Kaydolun</h3>
                    <h5 className="text-secondary fw-3 py-3">Deneme sınavına girmek için, hemen ücretsiz katılın!</h5>
                </div>
                <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder="Ad Soyadınız" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Eposta" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="phone" placeholder=" * * * * * * " required=""/>
                            </div>
                        </div>
                   
                        <div className="col-12">
                        <Button size="lg" href="#" variant="outline-primary" >Üye Ol</Button>
                            <div className="contact-bottom">
                                <span className="d-inline-block mt-3">
                                    Üye olunarak, 
                                    <a href="/#"> Kullanım Kuralları</a> 
                                    ve 
                                    <a href="/#"> Kişisel Veri Korunması </a>
                                    şartlarımızı kabul etmiş olmaktasınız.
                                </span>
                            </div>
                        </div>
                </div>
            </form>
            </Tab>

            <Tab eventKey="login" title="Üye Girişi">
            <form id="login">
                <div className="contact-top">
                    <h3 className="contact-title p-2">Giriş Yapınız</h3>
                    <h5 className="text-secondary fw-3 py-3">Sınav sonuçlarının takip edip, rekabeti ölçebilirsiniz.</h5>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" placeholder="Name" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Phone" required=""/>
                        </div>
                    </div>
                    <div className="col-12">
                    <Button size="lg" href="#" variant="outline-primary" style={{marginBottom:'54px'}}>Giriş Yap</Button>
                        <div className="contact-bottom">
                            <span className="d-inline-block mt-3">
                                Giriş yaparak, 
                                <a href="/#"> Kullanım Kuralları</a> 
                                ve 
                                <a href="/#"> Kişisel Veri Korunması </a>
                                şartlarımızı kabul etmiş olmaktasınız.
                            </span>
                        </div>
                    </div>
                </div>
            </form>
            <p className="form-message"></p>
            </Tab>

        </Tabs>
        
        </>
    );
}

export default FormComponent;