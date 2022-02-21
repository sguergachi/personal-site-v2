import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import Root from "./root";

const Layout = ({ pageTitle, children }) => {
  return (
    <Root>
      <div className={container}>
        <title>{pageTitle}</title>
        <nav class="text-center">
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/who">
                Who?
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <div class="relative select-none -z-0">
            <h1 class="text-slate-700  opacity-10 absolute top-20 left-1/2 transform  -translate-y-1/2 -translate-x-1/2 lg:text-8xl sm:text-6xl text-center">
              {pageTitle}
            </h1>
          </div>
          <div className="z-10 select-auto">
          {children}
          </div>
        </main>
      </div>
    </Root>
  );
};
export default Layout;
