import React from "react";
import PropTypes from "prop-types"
import Header from '../components/header';
import Footer from "../components/footer";

import '../styles/global.scss';

const Layout = ({children}) =>(
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Layout