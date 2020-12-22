import React from "react";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

import Header from "./components/header";
import Footer from "../org/footer";

const Index = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};

export default Index;
