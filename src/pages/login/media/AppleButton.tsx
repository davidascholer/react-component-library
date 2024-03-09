import React from "react";

const AppleButton: React.FC = () => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
      }}
    >
      <img
        src="path/to/apple-logo.png"
        alt="Apple Logo"
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
      />
      Sign in with Apple
    </button>
  );
};

export default AppleButton;
