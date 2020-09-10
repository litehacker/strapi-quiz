import React , {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';  
import image from '../img/register.svg'
  
function Login() {
  const [data, setdata] = useState({username:'', password: '',  });
  const apiUrl = "http://localhost:1337/auth/local";  
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');
  let submition={}

  const Authentication = (e) => {
    e.preventDefault();  
    const inputData = { identifier:data.username, password:data.password};  
    
    axios.post(apiUrl, inputData)
    .then(response =>{
        // Handle success.
        submition.user = response.data.user
        submition.jwt = response.data.jwt
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
      
  const onChange = (e) => {  
    e.persist();  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }   
  return (
    <div className="container">  
    <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important" }}>  
      <div className="card-body p-0">  
        <div className="row">  
          <div className="col-lg-7 align-self-center px-5">
              <img src={image} alt="register" style={{'maxWidth':'100%'}}/>
          </div>
          <div className="col-lg-5">  
              <div className="p-5">  
                  <div className="text-center">  
                  <h1 className="h4 text-gray-900 mb-4">Üye Girişi</h1>  
                  </div>  
                  <form onSubmit={Authentication} className="user"> 
                      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                      {success && <div className="alert alert-success" role="alert">Merhaba! Girişiniz Başarılı.</div>}
                      {success=== '' && 
                      <>
                          <div className="form-group">
                              <label>Kullanıcı Adı</label>
                              <input type="text" name="username" onChange={onChange} value={data.username} className="form-control" placeholder="Email ya da kullanıcı adınızı giriniz" />
                          </div> 
                          <div className="form-group">
                              <label>Şifrenizi Oluşturun</label>
                              <input type="password" name="password" onChange={onChange} value={data.password} className="form-control"placeholder=" * * * * * *" />
                          </div> 
                      
                          <button type="submit" className="btn btn-primary  btn-block">  
                              Girişi Tamamla  
                          </button>  
                      </>
                      }
                  </form>  
                  {success=== '' && 
                  <>
                      <hr />  
                      <div className="d-flex">
                            <p className="forgot-password mr-auto">
                                Üyeliğiniz mi yok? <Link to="/register">Kaydolun</Link>
                            </p>
                            <p className="forgot-password">
                            Şifremi <Link to="şifremi-unuttum">unuttum</Link>
                            </p>
                        </div>
                  </>
                  }     
              </div>
          </div>  
          
        </div>  
      </div>  
    </div>  
  </div>  
  );

}
export default Login;