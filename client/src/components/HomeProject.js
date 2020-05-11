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
          icon="folder"
          content={
            <a
              href="/"
              style={cssJSON.linkStyle}
              onClick={(e) => {
                e.preventDefault();
                setTabSwitch("item1");
              }}
            >
              Bill Book
            </a>
          }
        />
        <List.Item
          style={cssJSON.itemStyle}
          icon="folder"
          content={
            <a
              href="/"
              style={cssJSON.linkStyle}
              onClick={(e) => {
                e.preventDefault();
                setTabSwitch("item2");
              }}
            >
              Covid-19 OC
            </a>
          }
        />
        <List.Item
          style={cssJSON.itemStyle}
          icon="folder"
          content={
            <a
              href="/"
              style={cssJSON.linkStyle}
              onClick={(e) => {
                e.preventDefault();
                setTabSwitch("item3");
              }}
            >
              Safe Zone
            </a>
          }
        />
      </List>
    </>
  );
}
