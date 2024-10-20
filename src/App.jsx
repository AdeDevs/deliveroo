import { Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "./components/Authentication"
import NavBar from "./components/Navigation"

function App() {
  return (
    <div>
      <NavBar />
      <div className="gap"></div>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
