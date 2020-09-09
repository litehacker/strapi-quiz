import React, { useState } from 'react'  
import {Link} from 'react-router-dom'
import axios from 'axios';  
import image from '../img/register.svg'

function Regster(props) {  
  const [data, setdata] = useState({username:'', email: '', password: '',  })  
  const apiUrl = "http://localhost:1337/auth/local/register";  
  const Registration = (e) => {  
    e.preventDefault();  
    const data1 = { username:data.username, email:data.email, password:data.password};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/profil')  
      })  
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
                  <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} className="user"> 
                    <div className="form-group">
                        <label>Kullanıcı Adı</label>
                        <input type="text" name="username" onChange={onChange} value={data.username} className="form-control" placeholder="kullanıcı adınızı yazınız" />
                    </div> 
                    <div className="form-group">
                        <label>Email Adresiniz</label>
                        <input type="text" name="email" onChange={onChange} value={data.email} className="form-control" placeholder="ornek@email.com" />
                    </div> 
                    <div className="form-group">
                        <label>Şifrenizi Oluşturun</label>
                        <input type="password" name="password" onChange={onChange} value={data.password} className="form-control" />
                    </div> 
                  
                  <button type="submit" className="btn btn-primary  btn-block">  
                    Create User  
                  </button>  
                    
                </form>  
                <hr />  
                <div className="d-flex">
                        <p className="forgot-password mr-auto">
                            Üyeliğiniz var mı? <Link to="/login">Giriş Yapın</Link>
                        </p>
                        <p className="forgot-password">
                            Şifremi <Link to="şifremi-unuttum">unuttum</Link>
                        </p>
                    </div>
              </div>  
            </div>  
            <div className="col-lg-5 align-self-center px-5">
                <img src={image} alt="register" style={{'max-width':'100%'}}/>
            </div>
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster 