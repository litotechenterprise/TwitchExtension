import api from './config'


export function Login (credentials) {
    try { 
        return api.post('/auth/jwt/create/', credentials, {
            headers: { 
                "Content-Type": "application/json",
            }
        }).then((res) => {
            return res.data;
        })
    } catch (e) {
        console.log(e);
        return e;
    }
}


export function Logout ({token}) {
    try { 
        return api.post('', {}, {
            headers: { 
                "Content-Type": "application/json",
                Authorization: "Bearer " + token }
        }).then((res) => {
            return res.json();
        })
    } catch (e) {
        console.log(e);
        return e;
    }
}