import { getUser } from './user-save-get.js';
import { isDead, isScrapped } from './is-dead.js';
// import { hasItems } from './has-items.js';

export const loadProfile = () => {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const social = document.getElementById('social');
    // const items = document.getElementById('items');

    const user = getUser();
    if (!user){
        window.location = '../';
    } 

    name.textContent = user.name;
    avatar.src = '../assets/robots/' + user.robot + '.png';
    social.textContent = user.social;

    if (isDead(user)){
        hp.textContent = 'XXXXX';
    } else {
        hp.textContent = user.hp;
    }

    if (isScrapped(user)){
        hp.textContent = 'XXXXX';
    } else; {
        hp.textContent = user.hp;
    }
    
    // if (hasItems(user)){
    //     items.src = 
    // } else (
    //     items.textContent = 'N/A'
    // )
};