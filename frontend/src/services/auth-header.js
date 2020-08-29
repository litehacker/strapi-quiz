export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.jwt) {
      return user.jwt ;
    } else {
      return {};
    }
  }