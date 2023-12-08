import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>
              Hii
              <br /> Welcome Back.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
              facere praesentium earum maxime voluptate qui minima?
            </p>
            <span>don't you have an account ?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>Login</button>
            </form>
            <Link style={{ textDecoration: "none" }}>
              <span>forgot your password?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
