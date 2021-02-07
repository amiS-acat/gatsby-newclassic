import React from "react";

import SEO from "../components/seo";
import Page from "../components/symple/page";

import "../styles/_destyle.css"
import "../styles/style.scss"

const Index = () => {
  return (
    <>
      <SEO pagetitle="debussy" pagepath="/debussy"/>
      <Page />
    </>
  );
};

export default Index;
