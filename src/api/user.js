import { clearUserData, setUserData } from "../util.js";
import * as api from "./api.js"


//toDo set endpoints name
const endpoint = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};


export async function login (email, password) {

    const result = await api.post(endpoint.login, {email, password});

    const user = {
        id: result._id,
        username: result.username,
        email : result.email,
       // gender: result.gender,
        accessToken: result.accessToken,

    }
    setUserData(user)
    return user;
}

export async function register(email, password, repeatPassword) {
    
    const result = await api.post(endpoint.register, {email, password, repeatPassword});
    const userData = {
        id: result._id,
        //username: result.username,
        email : result.email,
        //gender: result.gender,
        accessToken: result.accessToken,
        repeatPassword: result.repeatPassword,

    }
    setUserData(userData)
    return userData;
}

export function logout() {
    api.get(endpoint.logout)
    clearUserData()
    

}