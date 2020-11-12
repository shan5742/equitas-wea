import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
