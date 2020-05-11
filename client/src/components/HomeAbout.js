import React, { useContext } from "react";
import cssJSON from "./cssJSON.json";
import { List } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";

export default function HomeAbout() {
  const { setTabSwitch } = useContext(AssignContext);
  return (
    <>
      <List style={cssJSON.indentStyle}>
        <List.Item
          style={cssJSON.itemStyle}
          icon="github"
          content={
            <a href="https://github.com/iTh1nk" style={cssJSON.linkStyle}>
              Github
            </a>
          }
        />
        <List.Item
          style={cssJSON.itemStyle}
          icon="linkedin"
          content={
            <a
              href="https://www.linkedin.com/in/chaofeng16/"
              style={cssJSON.linkStyle}
            >
              LinkIn
            </a>
          }
        />
        <List.Item style={cssJSON.itemStyle}>
          <List.Icon name="marker" />
          <List.Content
            style={cssJSON.linkStyle}
            content={
              <a
                href="https://goo.gl/maps/CGy8mmSajrxYQSNu6"
                style={cssJSON.linkStyle}
              >
                Irvine, CA
              </a>
            }
          />
        </List.Item>
      </List>
    </>
  );
}
