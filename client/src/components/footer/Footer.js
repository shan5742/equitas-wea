import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="madeBy">Made by Asam Shan</p>
      <p className="creds">
        data provided by{" "}
        <a href="https://www.metaweather.com">MetaWeather.com</a>
      </p>
    </div>
  );
}
