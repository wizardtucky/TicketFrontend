import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/users/allusers';

class UserService {
    
    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();