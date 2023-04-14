import React, { useState } from "react";
import swal from "sweetalert";

export default function Forgot() {
  const [email, setEmail] = React.useState(null);

  function handleChange(event) {
    //setItemName((prev) => (prev = event.target.value));
    setEmail(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:3500/resetPassword";
    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    };

    await fetch(url, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          swal("Reset Link sent to your email ");
        } else {
          swal("Please Enter the registered emailId");
        }
        console.log("Reset link sent", response);
      })
      .catch((error) => console.log("Form submit error", error));
  }

  return (
    <div className="forgot">
      <form>
        <input
          className="reset-input"
          type="email"
          placeholder="Enter Email"
          onChange={handleChange}
        ></input>
        <button className="reset-button" type="submit" onClick={handleSubmit}>
          Send reset link
        </button>
      </form>
    </div>
  );
}
