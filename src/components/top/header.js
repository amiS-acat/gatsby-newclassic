import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <div className="header">{children}</div>
      <div className="header__under"></div>
    </>
  );
};

export default Header;
