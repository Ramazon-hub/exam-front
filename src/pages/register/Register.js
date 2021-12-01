import './Register.css'

import { useRef } from "react";
// import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useAuth from '../../hooks/authHook';
const Register = () =>{

//   const [input,setInput] = useState("")
const [setToken] = useAuth(true);
// const [token,setToken] = useState('')
  const history = useHistory()
  const username = useRef()
  const password = useRef()
  const fName = useRef()
  const lName = useRef()
  const email = useRef()
  
  const signUpForm= async(evt)=>{
    evt.preventDefault();
    const signUpdata = {
        fName:fName.current.value,
        lName:lName.current.value,
        email:email.current.value,
        uName: username.current.value,
        password: password.current.value,
    };
    console.log(signUpdata);
    const DATA = await fetch(`http://localhost:2000/register`,{
        method:"POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(signUpdata),
    })
    
    const user = await DATA.json();
    if (user.token) {
        setToken(user.token);
        history.push("/");
      } else {
        setToken(false);
      }
    console.log(user);
  }


 
    return(
     <div>
         <form onSubmit={signUpForm} >
             <input ref={fName} placeholder="first name" />
             <input ref={lName} placeholder="last name" />
             <input ref={email} placeholder="email" />
             <input ref={username} placeholder="Username" />
             <input ref={password} placeholder="Password" />
             <button>Login</button>
         </form>
     </div>
 
    )
}
export default Register