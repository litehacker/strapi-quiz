import React,{useState} from 'react';
import Button from "react-bootstrap/Button"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios';
import {Link} from 'react-router-dom'

import { useHistory } from "react-router-dom";
import Login from './login.component';
import Regster from './signup.component';
//import LoginForm from "./auth/login.component"

function FormComponent(){

    const [data, setdata] = useState({username:'', email: '', password: '',  })  
    const apiUrl = "http://localhost:1337/auth/local/register";  
    const [data1, setdata1] = useState({username:'', password: '',  });
    const apiUrl1 = "http://localhost:1337/auth/local";  
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    let history = useHistory();
    let submition={}
    console.log(data)
    const Authentication = (e) => {
        e.preventDefault();  
        const inputData = { identifier:data1.username, password:data1.password};  
        
        axios.post(apiUrl1, inputData)
        .then(response =>{
            // Handle success.
            submition.user = response.data.user
            if (response.data.jwt) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
            setSuccess(response.data.user.email)
            setErrorMessage('')
        })
        .catch(error =>{
          if (error.response) {
            setSuccess('')
            setErrorMessage(error.response.data.message[0].messages[0].message)
            submition.errorStatus = error.response.status
            submition.data = error.response.data
            submition.errorMessage = error.response.data.message[0].messages[0].message
          }
        });
    
        console.log(submition)
      }
    const Registration = (e) => { 
        e.preventDefault();  
        const data1 = { username:data.username, email:data.email, password:data.password};  
        
        
        axios.post(apiUrl, data1).then(response =>{
            // Handle success.
            submition.user = response.data.user
            submition.jwt = response.data.jwt
            setSuccess(response.data.user.email)
            setErrorMessage('')
            }).catch(error =>{
                if (error.response) {
                    setSuccess('')
                    setErrorMessage(error.response.data.message[0].messages[0].message)
                    submition.errorStatus = error.response.status
                    submition.data = error.response.data
                    submition.errorMessage = error.response.data.message[0].messages[0].message
                  }
                });
        console.log(submition)
        console.log(success)
    }  
  
    const onChange = (e) => {  
        e.persist();  
        setdata({ ...data, [e.target.name]: e.target.value });  
    }   
      
    const onChange1 = (e) => {  
        e.persist();  
        setdata1({ ...data1, [e.target.name]: e.target.value });  
      }   

    return(
        <>
        <Tabs defaultActiveKey="register" id="uncontrolled-tab-example">
            <Tab eventKey="register" title="Kaydol">
            <form id="contact-form" onSubmit={Registration} className="user"> 
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                        {success && <div className="alert alert-success" role="alert">Merhaba! Kaydınız başarıyla oluşmuş. <br></br> Lütfen {success} mail adresinizi kontrol edip üyeliğinizi onayladıktan sonra, <Link to="login">giriş yapınız</Link></div>}
                        {success=== '' && 
                        <>
                <div className="contact-top">
                    <h3 className="contact-title p-2">Ücretsiz Kaydolun</h3>
                    <h5 className="text-secondary fw-3 py-3">Deneme sınavına girmek için, hemen ücretsiz katılın!</h5>
                </div>
                <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" onChange={onChange} value={data.username}  placeholder="Kullanıcı adınız" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" onChange={onChange}  value={data.email} placeholder="Eposta" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" onChange={onChange}  value={data.password} placeholder=" * * * * * * " required=""/>
                            </div>
                        </div>

                   
                        <div className="col-12">
                        <Button type="submit"size="lg" variant="outline-primary" onSubmit={Registration}>Üye Ol</Button>
                            <div className="contact-bottom">
                                <span className="d-inline-block mt-3">
                                    Üye olunarak, 
                                    <a href="/kullanim-kurallari"> Kullanım Kuralları</a> 
                                    ve 
                                    <a href="/kisisel-veri-korunmasi"> Kişisel Veri Korunması </a>
                                    şartlarımızı kabul etmiş olmaktasınız.
                                </span>
                            </div>
                        </div>
                </div>
                </>
}
            </form>
            </Tab>

            <Tab eventKey="login" title="Üye Girişi">
            <form id="login" onSubmit={Authentication} className="user" >
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                      {success && setTimeout(()=>history.push('/profil'), 2000) && <div className="alert alert-success" role="alert">Merhaba! Girişiniz Başarılı.</div>}
                      {success=== '' && 
                      <>
                <div className="contact-top">
                    <h3 className="contact-title p-2">Giriş Yapınız</h3>
                    <h5 className="text-secondary fw-3 py-3">Sınav sonuçlarının takip edip, rekabeti ölçebilirsiniz.</h5>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" onChange={onChange1} value={data1.username} placeholder="Kullanıcı Adınız" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" onChange={onChange1} value={data1.password} placeholder="Şifreniz" required=""/>
                        </div>
                    </div>
                    <div className="col-12">
                    <Button size="lg" type="submit" variant="outline-primary" style={{marginBottom:'54px'}}>Giriş Yap</Button>
                        <div className="contact-bottom">
                            <span className="d-inline-block mt-3">
                                Giriş yaparak, 
                                <a href="/kullanim-kurallari"> Kullanım Kuralları</a> 
                                ve 
                                <a href="/kisisel-veri-korunmasi"> Kişisel Veri Korunması </a>
                                şartlarımızı kabul etmiş olmaktasınız.
                            </span>
                        </div>
                    </div>
                </div>
                </>
}
            </form>
            <p className="form-message"></p>
            </Tab>

        </Tabs>
        
        </>
    );
}

export default FormComponent;