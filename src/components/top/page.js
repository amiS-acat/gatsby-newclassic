import React from "react";

import Header from "./header";
import Footer from "../org/footer";
import Section1 from "./section1";
import Section3 from "./section3";
import Section2 from "./section2";

const Page = () => {
  return (
    <div className="top-content">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Page;
