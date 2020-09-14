import React from "react";
import Alert from 'react-bootstrap/Alert'

export default function Profile (props){
  
  if (props.currentUser)
    {
      return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{props.currentUser.user.username}</strong> kullanıcı profili
          </h3>
        </header>
        <p>
          <strong>Kullanıcı ID:</strong>{" "}
          {props.currentUser.user.id}
        </p>
      </div>
    );
  }
  else
  {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-2">
              
            </div>
            <div className="col-sm-8" >
            {[
              'warning',
            ].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                Öncelikle sisteme güriş yapınız. Dilerseniz {' '}
                <Alert.Link href="/login">Giriş Sayfasına </Alert.Link>
                geçin.
              </Alert>
            ))
            }  
            </div>   
            <div className="col-sm-2">
              
            </div> 
          </div>
        </div>
      </div>    
    );
  }
}