import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          identifier: "",
          password: "",
          loading: false,
          message: ""
        };
      }
    
      onChangeUsername(e) {
        this.setState({
          identifier: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.login(this.state.identifier, this.state.password).then(
            () => {
                this.props.history.push("/profil");
                //window.location.reload();
            },
            error => {
              const resMessage =
                (error.response) ||
                error.message ||
                error.toString();
                
              this.setState({
                loading: false,
                message: resMessage
              });
            }
          );
        } else {
          this.setState({
            loading: false
          });
        }
      }

    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-sm-12 ">
                <div className="col-sm-3">
                    
                </div>
                <div className="col-sm-6" >
                {this.state.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                            {this.state.message}
                            </div>
                        </div>
                        )}
                <Form onSubmit={this.handleLogin}
                    ref={c => {
                    this.form = c;
                    }}>
                        <h3>Üye Girişi</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <Input type="email" className="form-control" placeholder="Email adresinizi yazınız" 
                            name="identifier"
                            value={this.state.identifier}
                            onChange={this.onChangeUsername}
                            validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label>Şifre</label>
                            <Input type="password" className="form-control" placeholder="Şifrenizi Giriniz" 
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Beni Hatırla</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                            
                        </div>
                        
                        <div className="d-flex">
                            <p className="forgot-password mr-auto">
                                Üyeliğiniz mi yok? <Link to="/register">Kaydolun</Link>
                            </p>
                            <p className="forgot-password">
                            Şifremi <Link to="şifremi-unuttum">unuttum</Link>
                            </p>
                        </div>
                        
                        <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                        />
                    </Form>
                </div>
                <div className="col-sm-3">
                        
                </div>
            </div>
            </div>
            </div>
            
        );
    }
}
