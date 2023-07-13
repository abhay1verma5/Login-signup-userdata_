//import { query } from "express";
import React, { Component, useEffect, useState } from "react";
//import { useHistory} from "react-router-dom";

export default function UserHome({ userData }) {
 

  
  //const history=useHistory()
  const logOut = () => {
    
     window.localStorage.clear();
    // window.location.assign( "./sign-in");
    window.location.href = "./sign-in";
  };

 
 
  
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
