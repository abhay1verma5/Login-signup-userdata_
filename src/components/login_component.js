import React, { Component, useState } from "react";
import Toast from "./Toast";

import toast, { Toaster } from 'react-hot-toast';
const notify1 = () => toast("cokkie ");
const notify = () => toast('login succesfully!.');
const notify2 = () => toast('please fill email and password!.');
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
            if(email=="")
            {
           return   notify2();
            }
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
     //   alert(data.token, "userRegister");
        if (data.success == true) {
        {
              notify1();
        }
           window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }

          if(data.status == "founder")
          {
                notify();   
                
          }
        
        
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
            
          </p>
          <p className="forgot-password text-right">
            <a href="/forgetpassword">Forget password</a></p>
        </form>
      </div>

      <Toast/>
    </div>
  );
}
