import React from "react";
import GoogleButton from "./media/GoogleButton";
import AppleButton from "./media/AppleButton";

const Login: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <GoogleButton />
        <AppleButton />
      </div>
    </div>
  );
};

export default Login;
