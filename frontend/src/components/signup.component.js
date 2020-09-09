import React, { useState } from 'react'  
import axios from 'axios';  

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
    <div class="container">  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="username" onChange={onChange} value={data.username} class="form-control"  placeholder="username" />  
                    </div>  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="email" onChange={onChange} value={data.email} class="form-control"  placeholder="Email" />  
                    </div>  
                    <div class="col-sm-6">  
                      <input type="Password" name="password" onChange={onChange} value={data.password} class="form-control" placeholder="Password" />  
                    </div>  
                  </div>  
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Create User  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster 