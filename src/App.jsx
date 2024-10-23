import { Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "./components/Authentication"
import NavBar from "./components/Navigation"
import HomePage from "./components/Home"
import Orders from "./components/Order"

function App() {
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App