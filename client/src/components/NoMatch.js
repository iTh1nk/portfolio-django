import React from "react";
import "./NoMatch.css";
import { Button } from "semantic-ui-react";

function NoMatch() {
  return (
    <div>
      <div className="container" id="noMatchCon">
        <div style={{ marginTop: "10px", textAlign: "center", color: "Black" }}>
          <a href="/">
            <Button
              size="tiny"
              color="blue"
              icon="home"
              content="Go Back"
              labelPosition="right"
            />
          </a>
          <h1 style={{ fontWeight: "bolder" }}>Page Not Found...</h1>
        </div>
        <br />
        <a href="/">
          <img
            src="/404.gif"
            alt="404"
            style={{ width: "360px", height: "300px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default NoMatch;
