import { LOGIN } from "./actionTypes";

const SERVERURL ='http://localhost:8001/'

export function loginUser(details){
    fetch(`${SERVERURL}login-user`,{
        method:'POST',
        body:JSON.stringify(details),
        headers:
        {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res=>{return res.json()})
        .then(data=>{
           console.log('data recieved is',data)
        })
}