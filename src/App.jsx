import { Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "./components/Authentication"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
