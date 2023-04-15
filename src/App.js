import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import "./App.css";
import "./styles/header.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/forgot.css";
import "./styles/success.css";
import Forgot from "./components/ForgotPassword";
import ResetNewPassword from "./components/ResetNewPassword";
import Success from "./components/Success";
import UpdatedStatus from "./components/UpdatedStatus";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/LoginSystem_Mern/Register" element={<Register />} />
        <Route path="/LoginSystem_Mern/Success" element={<Success />} />
        <Route path="/LoginSystem_Mern/Home" element={<Home />} />

        <Route path="/LoginSystem_Mern/Forgot" element={<Forgot />} />

        <Route
          exact
          path="/LoginSystem_Mern/ResetNewPassword/:id/:resetToken"
          element={<ResetNewPassword />}
        />
        <Route
          exact
          path="/LoginSystem_Mern/UpdatedStatus"
          element={<UpdatedStatus />}
        />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
