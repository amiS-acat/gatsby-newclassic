import React from "react";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

import Header from "./components/header";
import Footer from "../org/footer";

const Index = () => {
  require("../../styles/_symple.scss");
  return (
    <>
      <Header />
      <Section1 />
      <div className="content-width">
      <Section2 />
      <Section3 />
      </div>
      <Footer />
    </>
  );
};

export default Index;
