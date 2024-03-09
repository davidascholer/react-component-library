import React from "react";

const GoogleButton: React.FC = () => {
  const handleSignIn = () => {
    // Handle sign-in logic here
  };

  return (
    <button
      onClick={handleSignIn}
      style={{
        backgroundColor: "#4285F4",
        color: "#fff",
        padding: "10px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
      }}
    >
      <img
        src="google-logo.png"
        alt="Google Logo"
        style={{ marginRight: "10px", width: "20px", height: "20px" }}
      />
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
