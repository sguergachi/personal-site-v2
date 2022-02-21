import * as React from "react";
import logo from "../Images/Icon.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../components/layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Sammy Guergachi">
      <title>Home Page</title>
      <h1 className="font-bold underline">
        Sammy Guergachi
        <br /> <span style={headingAccentStyles}>— My Portfolio site! </span>
      </h1>
      <Link to="/who">Who?</Link>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Work In Progress...</code>{" "}
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
