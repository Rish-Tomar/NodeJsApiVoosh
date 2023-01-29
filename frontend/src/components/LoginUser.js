import React,{useState} from 'react'
import './loginUser.css'

function LoginUser() {

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')


  function handleLogin(e){
    e.preventDefault()

    console.log('inside handlefunction')
    const SERVERURL ='http://localhost:8001/'
    fetch(`${SERVERURL}login-user`,{
        mode:'no-cors',
        method:'POST',
        body:JSON.stringify({mobile,password}),
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
  
    
  return (
    <div className='login-wrapper'>
        <form className='form-components'>
            <input type='text'     
                    className='inputbox'      
                    placeholder='Enter Mobile Number' 
                    onChange={(e)=>{setMobile(e.target.value)}} />
            
            <input type='password' 
                    className='inputbox'      
                    placeholder='Enter Password' 
                    onChange={(e)=>{setPassword(e.target.value)}}/>
            
            <input type='submit'   className='submit-button' onClick={handleLogin} c/>
        </form>

    </div>
  )
}

export default LoginUser