import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Modal from "./Modal";

export default function ResetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { id, resetToken } = useParams();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  console.log(id);
  console.log(resetToken);

  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(password);
  }
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  }
  const handleClose = () => {
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const passwordMatch = password === confirmPassword;
    console.log(passwordMatch);
    const url = "http://localhost:3500/updatePassword";
    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        id: id,
        resetToken: resetToken,
      }),
    };
    if (passwordMatch) {
      await fetch(url, requestOptions).then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          // console.log(response);
          navigate("/LoginSystem_Mern/UpdatedStatus");
          // <Navigate to="/UpdatedStatus" replace={true} />;

          // swal("Password updated successfully");
        } else if (response.status === 400) {
          swal("Password not updated");
        }
      });

      //.catch((error) => console.log("Form submit error", error));
    } else {
      // swal("Password doesnot match");
      handleOpen();
    }
  }

  return (
    <div className="register">
      <h3>Reset Password</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Enter New Password"
          name="password"
        ></input>
        <input
          onChange={handleConfirmPassword}
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        ></input>
        <button type="submit">Register</button>
        {open && <Modal />}
      </form>
    </div>
  );
}
