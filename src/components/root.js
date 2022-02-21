import * as React from "react";
import { container } from "./root.module.css";
import { Helmet } from "react-helmet";
const Root = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Josefin Sans"
        />
      </Helmet>

      <main>{children}</main>
    </div>
  );
};
export default Root;
