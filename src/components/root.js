import * as React from "react";
import { container } from "./root.module.css";

const Root = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Josefin Sans"
      />
      <script
        src="https://kit.fontawesome.com/f5589a7fb0.js"
        crossorigin="anonymous"
      ></script>

      <main>{children}</main>
    </div>
  );
};
export default Root;
