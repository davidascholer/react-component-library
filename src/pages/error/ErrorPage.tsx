import React from "react";
import { Box, Typography } from "@mui/material";

interface ErrorProps {
  errorCode: number;
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorProps> = ({ errorCode, errorMessage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" color="error.main">
        Error {errorCode}
      </Typography>
      <Typography variant="h4" color="text.secondary">
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default ErrorPage;
