import { Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "./components/Authentication"
import NavBar from "./components/Navigation"
import HomePage from "./components/Home"

function App() {
  return (
    <div>
      <NavBar />
      <div className="gap"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
