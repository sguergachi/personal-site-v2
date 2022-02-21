import * as React from "react";
import logo from "../images/Icon.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import {faCircle} from "@fortawesome/fontawesome-svg-core"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Sammy Guergachi">
      <script
        href="https://kit.fontawesome.com/f5589a7fb0.js"
        crossorigin="anonymous"
      ></script>

      <title>Home Page</title>
      <div class="text-2xl text-center pt-4">
        {" "}
        My name is
        <br />
        <span className="text-3xl text-blue-200">
          <span class="text-blue-500">S</span>ammy
          <span class="text-blue-500"> G</span>uer
          <i class="text-cyan-100 m-1 fa-solid fa-circle"/>ga
          <i class="text-cyan-100 m-1 fa-solid fa-circle"/>chi
        </span>
        <br />
        <span className="italic text-blue-500 text-xl">
          I like designing software that helps people enjoy getting stuff done.
        </span>
        <br />
        <div class="p-10 inline-block">
          <a
            href="mailto: sguergachi@gmail.com"
            class="m-4 text-cyan-100 fa-2x fa fa-envelope"
            aria-hidden="true"
          ></a>
          <a
            href="http://www.twitter.com/sguergachi"
            class="m-4 text-cyan-100 fa-2x fa fa-twitter"
            aria-hidden="true"
          ></a>
          <a
            href="http://www.github.com/sguergachi"
            class="m-4 text-cyan-100 fa-2x fa fa-github"
            aria-hidden="true"
          ></a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
