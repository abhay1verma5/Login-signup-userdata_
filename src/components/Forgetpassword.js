import React,{useState} from 'react'
import Toast from "./Toast";
import toast, { Toaster } from 'react-hot-toast';
const Forgetpassword = () => {
    const notify = () => toast('user not found.');
    const notify1 = () => toast('login succesfully!.');
    const notify2 = () => toast('please fill email and password!.');
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
            if(email=="")
            {
           return   notify2();
            }
    console.log(email, password);
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status, "userRegister");
        if (data.status == "ok") {
        {
          notify1();
        }
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./sign-in";
        }

          if(data.status == "founder")
          {
                notify();   
                
          }
        
        
      });
  }
  return (
    <div>
    <div className="auth-wrapper mt-48">
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

          

          <div className="mb-3 ">
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
        </form>
      </div>

      <Toast/>
    </div></div>
  )
}

export default Forgetpassword