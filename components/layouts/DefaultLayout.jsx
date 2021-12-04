import React from "react";
import Head from "./Head";
const DefaultLayout = ({ children }) => (
  <>
    <Head />
    {children}
  </>
);

export default DefaultLayout;
