import React from "react";

import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Footer from "../org/footer";

const Index = () => {
  require("../../styles/_cube.scss");
  return (
    <>
      <Header />
      <div className="content-width">
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </>
  );
};

export default Index;
