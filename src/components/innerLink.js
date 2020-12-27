import React from "react";
import { Link } from "gatsby";

const InnerLink = () => {
  return (
    <ul>
      <li>
        <Link to="/page1">1</Link>
      </li>
      <li>
        <Link to="/page2">2</Link>
      </li>
      <li>
        <Link to="/page3">3</Link>
      </li>
    </ul>
  );
};

export default InnerLink;
