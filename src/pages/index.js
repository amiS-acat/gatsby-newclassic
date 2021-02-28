import React from "react";

import SEO from "../components/seo";
import Page from "../components/top/page";

import "../styles/_destyle.css"
import "../styles/style.scss"
import "../styles/_scroll.scss"

const Index = () => {
  return (
    <>
      <SEO pagetitle="top"/>
      <Page />
    </>
  );
};

export default Index;
