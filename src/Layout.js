import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Nav />
      <div className="content">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
