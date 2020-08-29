import axios from "axios";

const API_URL = "http://localhost:1337/auth/local";

class AuthService {
  async login(identifier, password) {

    return axios
        .post(API_URL, {
            identifier,
            password
        })
        .then(response => {
            // Handle success.
            console.log('Well done! Response');
            if (response.data.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            //console.log('User profile', response.data.user);
            //console.log('User token', response.data.jwt);
            return response.data;
        })
        .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        });
    
  }

    logout() {
        localStorage.removeItem("user");
    }

  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();