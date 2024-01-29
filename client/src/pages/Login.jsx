import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./Login.css"

const Login=()=>{
  const [login , Setlogin]=useState("")
  const [logout , Setlogout]=useState("")



  const loginFunc=async()=>{
    const loginresponse=await axios.get("http://localhost:3000/auth/login")
    console.log(loginresponse.data)
    Setlogin(loginresponse.data)
  }

  const logoutFunc=async ()=>{
    const logoutresponse=await axios.get("http://localhost:3000/auth/logout")
    console.log(logoutresponse.data)
    Setlogout(logoutresponse.data)
  }

  return(
    <div className="out">
      <button onClick={loginFunc} type="button">Login</button>
      <p>{login}</p>
      <button onClick={logoutFunc} type="button">Logout</button>
      <Link to="/"><button type="button">Home</button></Link>
      <p>{logout}</p>
    </div>
  )
}

export default Login