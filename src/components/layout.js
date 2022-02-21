import * as React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";
import Root from "./root";

const Layout = ({ pageTitle, children }) => {
  return (
    <Root>
      <div className={container}>
        <title>{pageTitle}</title>
        <nav class="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/who">Who</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 class="text-slate-600 text-7xl text-center">{pageTitle}</h1>
          {children}
        </main>
      </div>
    </Root>
  );
};
export default Layout;
