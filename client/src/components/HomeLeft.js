import React, { useContext } from "react";
import { Image, List } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import cssJSON from "./cssJSON.json";

export default function HomeLeft() {
  const { setTabSwitch } = useContext(AssignContext);

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setTabSwitch("home");
        }}
      >
        <Image src="/favicon.ico" size="small" />
        <h2 style={cssJSON.nameStyle}>Chao Feng</h2>
        <span style={cssJSON.subPosition}>Full Stack Developer</span>
      </div>
      <br />
      <div>
        <h3>Projects</h3>
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
        <h3>About</h3>
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
        <h3>Contact</h3>
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
              <a
                href="https://www.facebook.com/iTh1nk"
                style={cssJSON.linkStyle}
              >
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
      </div>
    </>
  );
}
