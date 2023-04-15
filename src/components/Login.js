import React, { useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";
export default function Login() {
  const [formData, setformData] = React.useState({
    username: "",
    password: "",
    rememberPassword: "",
  });
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["User"]);
  useEffect(() => {
    {
      setformData(() => {
        //console.log(cookie.Name);
        return {
          username: cookie.Name,
          password: cookie.Password,
          rememberPassword: "",
        };
      });
    }
  }, []);

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

    //const [email,setEmail]=React.useState("");

    if (formData.rememberPassword === "on") {
      setCookie("Name", formData.username, { path: "/" });
      setCookie("Password", formData.password, { path: "/" });
      //localStorage.setItem(formData.username,formData.password)
    }
    console.log(cookie);

    const url = "https://login-back-6xcc.onrender.com/login";
    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    await fetch(url, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          //console.log(response);
          //swal("Logged In successfully");
          navigate("/Home");
        } else {
          swal("Please enter a valid username and password");
        }
      })
      .catch((error) => console.log("Form submit error", error));
  }
  return (
    <div className="login">
      <h3>Login</h3>

      <form className="form">
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
        ></input>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
        ></input>
        <div className="checkbox">
          <input
            type="checkbox"
            name="rememberPassword"
            onChange={handleChange}
          ></input>
          <span>Remember password</span>
        </div>

        <button onClick={handleSubmit} type="submit">
          Login
        </button>

        <div className="newuser">
          <Link to="/LoginSystem_Mern/Register">New User?</Link>
          <Link to="/LoginSystem_Mern/Forgot">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}
