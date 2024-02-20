/*
Todo: 
- Install packages
  - yarn add @reduxjs/toolkit
  - yarn add react-redux
*/
import { store } from "./store";
import { Provider } from "react-redux";

import React from "react";
import Counter from "./Counter";

const Toolkit: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Toolkit;
