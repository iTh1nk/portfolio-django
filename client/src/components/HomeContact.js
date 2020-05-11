import React, { useContext } from "react";
import cssJSON from "./cssJSON.json";
import { List } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";

export default function HomeContact() {
  const { setTabSwitch } = useContext(AssignContext);
  return (
    <>
      <List style={cssJSON.indentStyle}>
        <List.Item
          style={cssJSON.itemStyle}
          icon="twitter"
          content={
            <a href="https://twitter.com/_ith1nk" style={cssJSON.linkStyle}>
              Twitter
            </a>
          }
        />
        <List.Item
          style={cssJSON.itemStyle}
          icon="facebook"
          content={
            <a href="https://www.facebook.com/iTh1nk" style={cssJSON.linkStyle}>
              Facebook
            </a>
          }
        />
        <List.Item
          style={cssJSON.itemStyle}
          icon="mail"
          content={
            <a href="mailto:fnchao@hotmail.com" style={cssJSON.linkStyle}>
              fnchao@hotmail.com
            </a>
          }
        />
        <List.Item
          style={cssJSON.itemStyle}
          icon="send"
          content={
            <a
              href="/"
              style={cssJSON.linkStyle}
              onClick={(e) => {
                e.preventDefault();
                setTabSwitch("sendMessage");
              }}
            >
              Send Message
            </a>
          }
        />
      </List>
    </>
  );
}
