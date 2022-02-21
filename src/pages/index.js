import * as React from "react";
import logo from "../images/Icon.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Sammy Guergachi">
      <title>Home Page</title>
      <div class="text-2xl text-center pt-4">
        {" "}
        My name is
        <br />
        <span class="blue">S</span>ammy <span class="blue">G</span>uer
        <i class="fa-solid fa-circle"></i>ga<i class="fa-solid fa-circle"></i>
        chi
        <br/>
        <span className="italic text-cyan-700 text-xl">
          I like designing software that helps people enjoy getting stuff done.
        </span>
      </div>

     
    </Layout>
  );
};

export default IndexPage;
