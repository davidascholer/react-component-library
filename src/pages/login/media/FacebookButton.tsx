import React from "react";

const FacebookButton: React.FC = () => {
  return (
    <button
      style={{
        backgroundColor: "#1877F2",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      Log in with Facebook
    </button>
  );
};

export default FacebookButton;
