import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-sm-12 ">
                <div className="col-sm-3">
                    
                </div>
                <div className="col-sm-6" >
                    <form>
                        <h3>Üye Girişi</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email adresinizi yazınız" />
                        </div>

                        <div className="form-group">
                            <label>Şifre</label>
                            <input type="password" className="form-control" placeholder="Şifrenizi Giriniz" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Beni Hatırla</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Giriş</button>
                        <div className="d-flex">
                            <p className="forgot-password mr-auto">
                                Üyeliğiniz mi yok? <Link to="/register">Kaydolun</Link>
                            </p>
                            <p className="forgot-password">
                            Şifremi <Link to="şifremi-unuttum">unuttum</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="col-sm-3">
                        
                </div>
            </div>
            </div>
            </div>
            
        );
    }
}
