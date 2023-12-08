import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>
              Hello
              <br />
              Buddy!.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
              facere praesentium earum maxime voluptate qui minima?
            </p>
            <span>do you have an account ?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="username" />
              <input type="text" placeholder="email" />
              <input type="password" placeholder="password" />
              {/* <input type="password" placeholder="password" /> */}
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
