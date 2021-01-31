import React from "react";

import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

import Header from "./header";
import Footer from "../footer";

const Page = () => {
  return (
    <div className="symple-content">
      <Header />
      <Section1 />
      <div className="content-width">
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
