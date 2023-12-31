import React, { useState } from "react";
import {useHistory} from "react-router-dom";

export const SignUp = (props) => {
  const [credentails, setCredentails] = useState({ name:"", email: "", password: "", cpassword: ""  });
  let history = useHistory();
  const { name, email, password }= credentails;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
    const json = await response.json();
    if(json.success)
    {
        //redirect
        localStorage.setItem('token',json.authToken);
         history.push("/");
         props.showAlert("Account Created successfully","success");
    }
    else{
        props.showAlert("Invaild","danger");
    }
    console.log(json);
  };
  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };




  return (
   
   
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name"  onChange={onChange} aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" onChange={onChange} minLength={5} required name="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onChange} minLength={5} required name="cpassword"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
