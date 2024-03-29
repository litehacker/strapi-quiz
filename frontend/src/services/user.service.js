import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://sinavhukuk.com/api';

class UserService {
  getPublicContent(url) {
    return axios.get(API_URL + url);
  }

  getUserBoard(url) {
    console.log('from getUserBoard '+ authHeader() )
    return axios.get(API_URL + url, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }

}

export default new UserService();