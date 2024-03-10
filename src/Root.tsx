import React from "react";
import { Link } from "react-router-dom";
import endpoints from "./utility/react-router/endpoints";

const Root: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={endpoints.BOTTOM_APP_BAR}>Bottom App Bar</Link>
        </li>
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
          <Link to={endpoints.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_IN_SIDE}>Sign In Side</Link>
        </li>
        <li>
          <Link to={endpoints.SIGN_UP}>Sign Up</Link>
        </li>
        <li>
          <Link to={endpoints.STICKY_FOOTER}>Sticky Footer</Link>
        </li>
        <li>
          <Link to={endpoints.TOOLKIT}>Toolkit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Root;
