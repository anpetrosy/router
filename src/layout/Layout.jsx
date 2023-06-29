import React from "react";
import { Link } from "react-router-dom";
import Aside from '../components/aside/Aside'

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        {<Aside />}
      </aside>
      <main>{children}</main>
    </>
  );
};

export default Layout