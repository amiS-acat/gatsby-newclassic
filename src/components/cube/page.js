import React from "react";

import Header from "./components/header";
import Section1 from "./components/section1";
// import Section3 from "./components/section3";
import Footer from "../org/footer";

const Index = () => {
  require("../../styles/_cube.scss");
  return (
    <>
      <Header />
      <Section1 />
      {/* <Section3 /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Index;
