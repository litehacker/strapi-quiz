import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;
    if (currentUser)
    {
        return (
        <div className="container">
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong> Profile
            </h3>
          </header>
          <p>
            <strong>Token:</strong>{" "}
            {currentUser.jwt.substring(0, 20)} ...{" "}
            {currentUser.jwt.substr(currentUser.jwt.length - 20)}
          </p>
          <p>
            <strong>Id:</strong>{" "}
            {currentUser.user.id}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {currentUser.user.email}
          </p>
          <strong>Authorities:</strong>
            { currentUser.user.role.name }
        </div>
      );
    }
    else
      {
        return(<div>Girişi Tamamlanmamış Profil denemesi</div>);
      }
  }
}