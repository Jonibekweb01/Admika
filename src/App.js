import { useState } from "react";
import "./App.css"
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login.component";

function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'))
  console.log(setIsAdmin);
  if (!isAdmin) {
    return <Login />
  }
  return <Home />
}
export default App;