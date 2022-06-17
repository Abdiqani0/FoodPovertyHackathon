import { useHistory } from 'react-router-dom';

export function isUserSignedIn(history: any) {
    const email = JSON.parse(localStorage.getItem('email') || '{}');
    if(email.includes('@')){
        return true;
    }
    history.push("/login");
    return false;
}