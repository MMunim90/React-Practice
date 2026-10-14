import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {authUser, login} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(username, email, password);
    login(username, email, password)
  };

//   console.log(authUser)

  return (
    <form onSubmit={handleLogin}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 m-auto my-20">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="input"
          placeholder="Username"
        />

        <label className="label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
      </fieldset>
    </form>
  );
};

export default Login;
