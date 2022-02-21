import * as React from "react";
import Layout from "../components/layout";

// markup
const WhatPage = () => {
  return (
    <Layout pageTitle="What?">
      <title>What is Sammy</title>
      <div className="text-2xl text-center pt-4">
        <span className="text-amber-200">
          Hi There, Here Are Some Things I Worked On!
        </span>
      </div>
    </Layout>
  );
};

export default WhatPage;
