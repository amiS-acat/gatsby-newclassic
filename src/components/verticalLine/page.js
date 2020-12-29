import React from "react";

import Header from "../org/header";
import Footer from "../org/footer";

import Section1 from "./components/section1";

const Page = () => {
  return (
    <div className="verticalLine-content">
      <Header />
      <Section1 />
      <Footer />
    </div>
  );
};
export default Page;
