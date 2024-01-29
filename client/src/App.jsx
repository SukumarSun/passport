import Home from "./pages/Home"
import Login from "./pages/Login"
import {Routes,Route} from "react-router-dom"

const App=()=>{
  return(
    <div>
      <Login/>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </div>
  )
  
}

export default App