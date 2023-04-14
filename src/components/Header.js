import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="navbar">
      <Link to="/">Login</Link>
      <Link to="/LoginSystem_Mern/Register">Register</Link>
    </div>
  );
}
