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
          <Link to={endpoints.TOOLKIT}>Toolkit</Link>
        </li>
        <li>
          <Link to={endpoints.ERROR}>Error</Link>
        </li>
        <li>
          <Link to={endpoints.LOGIN}>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Root;
