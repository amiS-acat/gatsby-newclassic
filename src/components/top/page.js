import React from "react";

import Header from "./header";
import Footer from "./footer";
import FV from "./FV";
import Section1 from "./section1";
import Section2 from "./section2";

const Page = () => {
  return (
    <div className="top-content">
      <Header />
      <FV />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Page;
