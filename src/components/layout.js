import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import Root from "./root";
import logo from "../images/Icon.svg";

const Layout = ({ pageTitle, children }) => {
  return (
    <Root>
      <div className={container}>
        <title>{pageTitle}</title>
        <nav className="ml-5">
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Who?
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/what">
                What?
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/why">
                Why?
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          {/* Background Text Decor */}
          <div className="relative select-none">
            <h1
              className="text-slate-700 opacity-10 absolute top-20 left-1/2 transform  -translate-y-1/2 -translate-x-1/2 
           text-7xl text-center"
            >
              {pageTitle}
            </h1>
          </div>

          {/* Content */}
          <div className="select-auto mt-10">{children}</div>
        </main>

        <div className="select-none absolute left-1/2 transform -translate-x-1/2 bottom-10  lg:p-6 sm:p-5 p-3 w-10/12 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-12 w-12" src={logo} />
          </div>
          <div>
            <div className="md:text-xl text-lg font-medium text-black">
              Website Construction in Progress
            </div>
            <p className="text-slate-500">I'm working on it!</p>
          </div>
        </div>
      </div>
    </Root>
  );
};
export default Layout;
