import React from "react";

import Header from "./header";
import Section1 from "./section1";
import Section2 from "./section2";
import Footer from "../org/footer";

const Page = () => {
  return (
    <div className="cube-content">
      <Header />
      <div className="content-width">
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
