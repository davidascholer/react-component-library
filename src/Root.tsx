import React from "react";
import { Link } from "react-router-dom";
import endpoints from "./utility/react-router/endpoints";
import { Typography } from "@mui/material";

const Root: React.FC = () => {
  return (
    <>
      <Typography variant="h5">Pages</Typography>
      <ul>
        <li>
          <Link to={endpoints.BLOG}>Blog</Link>
        </li>
        <li>
          <Link to={endpoints.CHECKOUT}>Checkout</Link>
        </li>
        <li>
          <Link to={endpoints.DASHBOARD}>Dashboard</Link>
        </li>
        <li>
          <Link to={endpoints.ERROR}>Error</Link>
        </li>
        <li>
          <Link to={endpoints.LANDING_PAGE}>Landing Page</Link>
        </li>
        <li>
          <Link to={endpoints.PRICING}>Pricing</Link>
        </li>
        <li>
          <Link to={endpoints.REACT_QUERY}>React Query</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_IN_SIDE}>Sign In Side</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
      <Typography variant="h5">Utility</Typography>
      <ul>
        <li>
          <Link to={endpoints.TOOLKIT}>Toolkit</Link>
        </li>
      </ul>
      <Typography variant="h5">Components</Typography>
      <ul>
        <li>
          <Link to={endpoints.BOTTOM_APP_BAR}>Bottom App Bar</Link>
        </li>
        <li>
          <Link to={endpoints.STICKY_FOOTER}>Sticky Footer</Link>
        </li>
      </ul>
    </>
  );
};

export default Root;
