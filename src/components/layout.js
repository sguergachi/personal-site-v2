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
      <div  className={container}>
        <title>{pageTitle}</title>
        <nav class="ml-5">
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
            <h1 class="text-slate-700 opacity-10 absolute top-20 left-1/2 transform  -translate-y-1/2 -translate-x-1/2 lg:text-8xl sm:text-6xl text-center">
              {pageTitle}
            </h1>
          </div>
          <div className="z-10 select-auto">
          {children}
          </div>
        </main>
        
        <div class="absolute left-1/2 transform -translate-x-1/2 bottom-10  lg:p-6 sm:p-5 p-3 w-10/12 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} />
        </div>
        <div>
          <div class="md:text-xl text-lg font-medium text-black">
            Website Construction in Progress
          </div>
          <p class="text-slate-500">I'm working on it!</p>
        </div>
      </div>

      </div>
    </Root>
  );
};
export default Layout;
