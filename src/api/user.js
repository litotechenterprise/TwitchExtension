import api from './config'



export function getUser(token) {
    try {
        return api.get('/auth/users/me/', {
            headers: { 
                "Content-Type": "application/json",
                Authorization: "Bearer " + token}
        }).then((res) => {
            return res.json();
        })
    } catch(e) {
        console.log(e);
        return e;
    }
   
}