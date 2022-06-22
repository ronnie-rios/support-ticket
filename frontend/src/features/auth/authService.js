import axios from 'axios';

const API_URL = '/api/users';

const register = async(userData) => {
    const response = await axios.post(API_URL, userData)
    //gets the data, stringify and sets in localstorage
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } 
        return response.data
}

const authService = {
    //calling in the register function 
    register
}

export default authService