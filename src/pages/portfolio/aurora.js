import * as React from "react";
import logo from "../../images/aurora.svg";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";

// markup
const AuroraPost = () => {
  return (
    <Layout pageTitle="Who?">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/f5589a7fb0.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <title>Aurora Game Hub</title>
      <div className="text-2xl text-center pt-4">
        <span className="text-amber-200">My name is </span>
        <br />
        <img src={logo} />
        <br />
        <span className="italic text-blue-500 text-xl m-4">
          Aurora Game Hub was a project that taught me so much.
        </span>
        <br />
      </div>
    </Layout>
  );
};

export default AuroraPost;
