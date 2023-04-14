import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="status">
      <p>You are successfully registered.</p>
      <p>Click here to</p>
      <Link to="/">Log In</Link>
    </div>
  );
}
