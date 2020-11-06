import React, { useState} from 'react'  
import {Link} from 'react-router-dom'
import axios from 'axios';  
import image from '../img/register.svg'
import FormComponent from './formLandingPageComponent'

function Regster() {  
    const [data, setdata] = useState({username:'', email: '', password: '',  })  
    const apiUrl = "http://localhost:1337/auth/local/register";  
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    let submition={}
    console.log(data)
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
  return (  
    <div className="container">  
      <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important" }}>  
        <div className="card-body p-0">  
          <div className="row">  
            <div className="col-lg-5">  
                <div className="p-5">  
                    <div className="text-center">  
                    <h1 className="h4 text-gray-900 mb-4">Üye Olun</h1>  
                    </div>  
                    <form onSubmit={Registration} className="user"> 
                        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                        {success && <div className="alert alert-success" role="alert">Merhaba! Kaydınız başarıyla oluşmuş. <br></br> Lütfen {success} mail adresinizi kontrol edip üyeliğinizi onayladıktan sonra, <Link to="login">giriş yapınız</Link></div>}
                        {success=== '' && 
                        <>
                            <div className="form-group">
                                <label>Kullanıcı Adınız</label>
                                <input type="text" name="username" onChange={onChange} value={data.username} className="form-control" placeholder="kullanıcı adınız özgündür" />
                            </div> 
                            <div className="form-group">
                                <label>Email Adresiniz</label>
                                <input type="text" name="email" onChange={onChange} value={data.email} className="form-control" placeholder="ornek@email.com" />
                            </div> 
                            <div className="form-group">
                                <label>Şifrenizi Oluşturun</label>
                                <input type="password" name="password" onChange={onChange} value={data.password} className="form-control"placeholder=" * * * * * *" />
                            </div> 
                        
                            <button type="submit" className="btn btn-primary  btn-block">  
                                Kaydol  
                            </button>  
                        </>
                        }
                    </form>  
                    {success=== '' && 
                    <>
                        <hr />  
                        <div className="d-flex">
                                <p className="forgot-password mr-auto">
                                    Üyeliğiniz var mı? <Link to="/login">Giriş Yapın</Link>
                                </p>
                                <p className="forgot-password">
                                    Şifremi <Link to="şifremi-unuttum">unuttum</Link>
                                </p>
                        </div>
                    </>
                    }     
                </div>
            </div>  
            <div className="col-lg-7 align-self-center px-5">
                <img src={image} alt="register" style={{'maxWidth':'100%'}}/>
            </div>
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster 