import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  // [Actual Value, SET Value] = useState(Default value)
  const [NIK, setNIK] = useState(0);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // arrow function
    e.preventDefault(); //prevent default behavior

    const datalogin = {
      //create object
      nik: NIK,
      password: password,
    };
    console.log(datalogin);
  };

  return (
    <>
      <ul>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Dashbord">Dashbord</Link>
        </li>
      </ul>
      <div className="bg-slate-500 grid place-content-center h-screen">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>NIK</label>
          <input
            type="number"
            value={NIK}
            onChange={(e) => setNIK(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
