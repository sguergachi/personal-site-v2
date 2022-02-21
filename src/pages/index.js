import * as React from "react";
import logo from "../Images/Icon.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Sammy Guergachi">
      <title>Home Page</title>
      <div class ="text-2xl text-center"> My name is
       <br/>
        <span class="blue">S</span>ammy <span class="blue">G</span>uer<i class="fa-solid fa-circle"></i>ga<i class="fa-solid fa-circle"></i>chi</div>
      <p >
        <code>Work In Progress...</code>
      </p>
      <button class="bg-sky-600 hover:bg-sky-700 ...">Save changes</button>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
