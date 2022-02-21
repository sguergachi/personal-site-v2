import * as React from "react";
import logo from "../images/Icon.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { dot } from "./index.module.css";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Who?">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/f5589a7fb0.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <title>Sammy Guergachi</title>
      <div className="text-2xl text-center pt-4">
        <span className="text-amber-200">My name is </span>
        <br />
        <span className="text-5xl text-blue-200">
          <span className="text-blue-500 ">S</span>ammy
          <br className="lg:hidden" />
          <span className="text-blue-500"> G</span>uer
          <i className="text-amber-200 m-1 opacity-50 align-middle text-xs fa-solid fa-circle" />
          ga
          <i className="text-amber-200 m-1  opacity-50 align-middle text-xs fa-solid fa-circle" />
          chi
        </span>
        <br />
        <span className="italic text-blue-500 text-xl m-4">
          I design products that enable people to enjoy creating.
        </span>
        <br />
        <div className="p-10 inline-block">
          <a
            href="mailto: sguergachi@gmail.com"
            className="m-4 text-blue-100 fa-2x fa fa-envelope"
            aria-hidden="true"
          ></a>
          <a
            href="http://www.twitter.com/sguergachi"
            className="m-4 text-blue-100 fa-2x fa fa-twitter"
            aria-hidden="true"
          ></a>
          <a
            href="http://www.github.com/sguergachi"
            className="m-4 text-blue-100 fa-2x fa fa-github"
            aria-hidden="true"
          ></a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
