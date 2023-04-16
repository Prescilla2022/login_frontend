import React from "react";
import { Link } from "react-router-dom";

export default function UpdatedStatus() {
  return (
    <div className="status">
      <p>Password updated successfully</p>
      <p>Click here to</p>
      <Link to="/">Log In</Link>
    </div>
  );
}
