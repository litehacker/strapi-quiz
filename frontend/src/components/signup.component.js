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
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="#">sign in?</Link>
                    </p>
                </form>
                </div>
                <div className="col-sm-3"></div>
            </div>
            </div>
            </div>
        );
    }
}
