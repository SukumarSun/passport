import axios from "axios"
import { useState } from "react"

const Home=()=>{

  const [greet,setGreet]=useState("")

  const dothis=async ()=>{
    const responseData=await axios.get("http://localhost:3000/")
    const greeting=responseData.data
    setGreet(greeting)
  }

  return(
    <div>
      <h1>Hello World</h1>
      <button onClick={dothis} type="button">Click Me</button>
      <p>I am from backend,greeting you {greet}</p>
    </div>
  )
}

export default Home