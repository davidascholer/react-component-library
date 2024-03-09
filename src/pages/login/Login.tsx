import React from "react";
// import GoogleButton from "./media/GoogleButton";
// import AppleButton from "./media/AppleButton";
import { Box } from "@mui/material";
// import theme from "../../utility/mui/theme";

const Login: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const styles = {
    container: {
      width: "100%",
    },
    center: {
      textAlign: "center",
    },
  };

  return (
    <Box sx={[styles.container, styles.center]}>
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
        {/* <GoogleButton />
        <AppleButton /> */}
      </div>
    </Box>
  );
};

export default Login;
