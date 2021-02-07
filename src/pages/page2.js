import React from "react";

import SEO from "../components/seo";
import Page from "../components/palette/page";

import "../styles/_destyle.css"
import "../styles/style.scss"

const Index = () => {
  return (
    <>
      <SEO pagetitle="griffes" pagepath="/griffes"/>
      <Page />
    </>
  );
};

export default Index;