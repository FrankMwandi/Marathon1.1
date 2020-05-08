import axios from 'axios';


/*const API_URL = 'http://localhost:8000/api/';*/
var Api1 = 'http://localhost:8000/register/'
var Api2 = 'http://localhost:8000/auth/'
/*var Api3 = 'http://localhost:8000/users/'*/


class AuthService {
  login(user) {
    return axios
      .post(Api2 + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(Api1 + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();