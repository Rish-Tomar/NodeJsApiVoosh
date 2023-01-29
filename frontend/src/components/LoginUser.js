import React,{useState} from 'react'
import './loginUser.css'

function LoginUser() {

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')  
  const [loggeIn,setLoggedIn] =useState(false)
  const [userData,setUserData]=useState()


  async function handleLogin(e){
    e.preventDefault()

    console.log('inside handlefunction')
    const SERVERURL ='http://localhost:8001/'

    if(mobile&&password){
      const response =await fetch(`${SERVERURL}login-user`,{
        method:'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify({mobile,password})        
    })
    console.log(response.status)
    const data = await response.json()  
    console.log('data recieved is',data)
    if(response.status===200){
      setLoggedIn(true)
      setUserData(data.user)
      return;
    }
    }
    alert('Enter mobile and password')
  }

  function loggedInUser(){
   return (
    <div>
      <span>User : </span>
      <span>{userData}</span>  
    </div>
   )

  }

    
  return (
    <div className='login-wrapper'>

        {loggeIn?loggedInUser():
          <form className='form-components'>
              <input type='text'     
                      className='inputbox'      
                      placeholder='Enter Mobile Number' 
                      onChange={(e)=>{setMobile(e.target.value)}} />
              
              <input type='password' 
                      className='inputbox'      
                      placeholder='Enter Password' 
                      onChange={(e)=>{setPassword(e.target.value)}}/>
              
              <input type='submit'   className='submit-button' onClick={handleLogin}/>
          </form>
        }

    </div>
  )
}

export default LoginUser