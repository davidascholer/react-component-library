/*
Todo: 
- Install packages
  - yarn add @reduxjs/toolkit
  - yarn add react-redux
- Delete Counter.tsx, counterSlice.ts, and Toolkit.stories.ts
*/
import { store } from "./store";
import { Provider } from "react-redux";

const ToolkitProvider = ({ children }: { children: any }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ToolkitProvider;
