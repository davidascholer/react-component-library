import { Routes, Route, BrowserRouter } from "react-router-dom";
import endpoints from "./endpoints";
import BottomAppBar from "../../components/bottom-app-bar/BottomAppBar";
import ErrorPage from "./ErrorPage";
import { ReactNode } from "react";
import Root from "../../Root";
import Counter from "../toolkit/Counter";
import Login from "../../pages/login/Login";

const ReactRouter = ({ children }: { children?: ReactNode | null }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endpoints.ROOT} element={<Root />} />
        <Route
          path={endpoints.BOTTOM_APP_BAR}
          element={
            <BottomAppBar
              handleDrawerClick={function (): void {
                console.log("handleDrawerClick");
              }}
              handleAddClick={function (): void {
                console.log("handleAddClick");
              }}
              handleSearchClick={function (): void {
                console.log("handleSearchClick");
              }}
              handleKebabClick={function (): void {
                console.log("handleKebabClick");
              }}
            />
          }
        />
        <Route path={endpoints.TOOLKIT} element={<Counter />} />
        <Route
          path={endpoints.ERROR}
          element={<ErrorPage errorCode={404} errorMessage="Page Not Found" />}
        />
        <Route path={endpoints.LOGIN} element={<Login />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default ReactRouter;
