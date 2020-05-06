import React from "react";
import "./NoMatch.css";

function NoMatch() {
  return (
    <div>
      <div className="container" id="noMatchCon">
        <div style={{ marginTop: "10px", textAlign: "center", color: "Black" }}>
          <h1 style={{ fontWeight: "bolder" }}>Page Not Found...</h1>
        </div>
        <br />
        <a href="/">
          <img
            src="/404.gif"
            alt="404"
            style={{ width: "400px", height: "350px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default NoMatch;
