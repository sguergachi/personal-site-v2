require("dotenv").config({
  path: `.env`,
})

const linkResolver = require('./linkResolver.js').linkResolver


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal-Site-V2",
  },
};
