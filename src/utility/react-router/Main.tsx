/*
Todo: 
- Install packages
  - yarn add react-router-dom
- Delete Example.tsx
- Wrap this over the App component
- Modify endpoints.ts
*/
import { ReactNode } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import endpoints from "./endpoints";
import Root from "../../Root";
import ErrorPage from "../../pages/error/ErrorPage";

const ReactRouter = ({ children }: { children?: ReactNode | null }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={endpoints.ERROR}
          element={<ErrorPage errorCode={404} errorMessage="Page Not Found" />}
        />
        <Route path={endpoints.ROOT} element={<Root />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default ReactRouter;
