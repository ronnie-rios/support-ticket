import axios from 'axios';

const API_URL = '/api/users';

//register function
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)
    //gets the data, stringify and sets in localstorage
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } 
        return response.data
}

const login = async(userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    //gets the data, stringify and sets in localstorage
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    } 
        return response.data
}

const logout = () => localStorage.removeItem('user')

const authService = {
    //calling in the register function 
    register,
    logout,
    login
}

export default authService