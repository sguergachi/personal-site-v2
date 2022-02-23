import * as React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import { StaticImage } from "gatsby-plugin-image";
import auroraImage from "../images/aurora.png";

// markup
const WhatPage = () => {
  return (
    <Layout pageTitle="What?">
      <title>What is Sammy</title>
      <div className="text-2xl text-center pt-4">
        <span className="text-amber-200">
          Hi There, <br /> Here Are Some Things I Worked On!
        </span>
      </div>

      <div className="pt-10">
        <Card
          cardImage={<img src={auroraImage} />}
          link={"/portfolio/aurora"}
        />
      </div>
    </Layout>
  );
};

export default WhatPage;
