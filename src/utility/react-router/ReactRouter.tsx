import { Routes, Route, BrowserRouter } from "react-router-dom";
import endpoints from "./endpoints";
import BottomAppBar from "../../components/bottom-app-bar/BottomAppBar";
import ErrorPage from "../../pages/error/ErrorPage";
import { ReactNode } from "react";
import Root from "../../Root";
import Counter from "../toolkit/Counter";
import Blog from "../../pages/blog/Blog";
import SignIn from "../../pages/sign-in/SignIn";
import SignInSide from "../../pages/sign-in-side/SignInSide";
import SignUp from "../../pages/sign-up/SignUp";
import StickyFooter from "../../components/sticky-footer/StickyFooter";
import Checkout from "../../pages/checkout/Checkout";
import Dashboard from "../../pages/dashboard/Dashboard";
import LandingPage from "../../pages/landing-page/LandingPage";
import Pricing from "../../pages/pricing/Pricing";

const ReactRouter = ({ children }: { children?: ReactNode | null }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endpoints.BLOG} element={<Blog />} />
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
        <Route
          path={endpoints.ERROR}
          element={<ErrorPage errorCode={404} errorMessage="Page Not Found" />}
        />
        <Route path={endpoints.CHECKOUT} element={<Checkout />} />
        <Route path={endpoints.DASHBOARD} element={<Dashboard />} />
        <Route path={endpoints.PRICING} element={<Pricing />} />
        <Route path={endpoints.LANDING_PAGE} element={<LandingPage />} />
        <Route path={endpoints.ROOT} element={<Root />} />
        <Route path={endpoints.SIGN_IN} element={<SignIn />} />
        <Route path={endpoints.SIGN_IN_SIDE} element={<SignInSide />} />
        <Route path={endpoints.SIGN_UP} element={<SignUp />} />
        <Route path={endpoints.STICKY_FOOTER} element={<StickyFooter />} />
        <Route path={endpoints.TOOLKIT} element={<Counter />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default ReactRouter;
