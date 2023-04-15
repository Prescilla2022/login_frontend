import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setformData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    emailId: "",
  });
  const navigate = useNavigate();
  //const [email,setEmail]=React.useState("");
  console.log(formData);

  function handleChange(event) {
    setformData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const passwordMatch = formData.password === formData.confirmPassword;
    console.log(passwordMatch);
    const url = "https://login-back-6xcc.onrender.com/register";
    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    if (passwordMatch) {
      await fetch(url, requestOptions)
        .then((response) => {
          console.log(response.status);
          if (response.status === 201) {
            navigate("/LoginSystem_Mern/Success");
          } else if (response.status === 409) {
            swal(
              "Username or EmailId already exists! Try entering another username"
            );
          }
        })

        .catch((error) => console.log("Form submit error", error));
    } else {
      swal("Password doesnot match");
    }
  }

  return (
    <div className="register">
      <h3>Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Username"
          name="username"
        ></input>
        <input
          onChange={handleChange}
          type="email"
          placeholder="Enter EmailId"
          name="emailId"
        ></input>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Enter Password"
          name="password"
        ></input>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        ></input>
        <button type="submit">Register</button>
        <Link to="/">Already a user?</Link>
      </form>
    </div>
  );
}
