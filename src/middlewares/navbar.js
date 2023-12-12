import { getUserData } from "../util.js";



//change name of id
const userLink = document.querySelector('.user');
const guestLink = document.querySelector('.guest');


export function updateNavBar(ctx, next) {
    const userData = getUserData();
    
    if(userData) {
       
       // document.querySelector('span').textContent = `Welcome, ${userData.email}`
        userLink.style.display = 'inline'
        guestLink.style.display = 'none'
        
    } else {
        userLink.style.display = 'none'
        guestLink.style.display = 'inline'
    }
    next();
}