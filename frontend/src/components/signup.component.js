import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-sm-12 ">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <form>
                    <h3>Üye Kaydı</h3>

                    <div className="form-group">
                        <label>İsim</label>
                        <input type="text" className="form-control" placeholder="Adınızı yazınız" />
                    </div>

                    <div className="form-group">
                        <label>Soyisim</label>
                        <input type="text" className="form-control" placeholder="Soyadınızı Yazınız" />
                    </div>

                    <div className="form-group">
                        <label>Email adresi</label>
                        <input type="email" className="form-control" placeholder="Email adresi giriniz" />
                    </div>

                    <div className="form-group">
                        <label>şifre</label>
                        <input type="password" className="form-control" placeholder="Şifrenizi Kaydedin" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <div className="d-flex">
                        <p className="forgot-password mr-auto">
                            Üyeliğiniz var mı? <Link to="/login">Giriş Yapın</Link>
                        </p>
                        <p className="forgot-password">
                            Şifremi <Link to="şifremi-unuttum">unuttum</Link>
                        </p>
                    </div>
                </form>
                </div>
                <div className="col-sm-3"></div>
            </div>
            </div>
            </div>
        );
    }
}
