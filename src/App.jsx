import Navbar from "./component/Navbar";
import Home from "./component/Home"
import Register from "./component/Register";
import Login from "./component/Login"
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import { useEffect } from "react";




const App = () => {
  const dispatch = useDispatch()

  useEffect(async () => {
    const userLoged = await axios.get("/wasLogged")
    dispatch(setUser(userLoged.data))
  },{})


  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
