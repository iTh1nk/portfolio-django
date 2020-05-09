import React, { useContext } from "react";
import { Responsive, Segment, Image, List, Button } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";

export default function HomeLeft() {
  const { tabSwitch, setTabSwitch } = useContext(AssignContext);
  const styles = {
    nameStyle: {
      marginBottom: "0em",
      marginTop: ".5em",
    },
    subPosition: {
      color: "grey",
      marginTop: "0em",
      fontStyle: "italic",
    },
    linkStyle: {
      color: "",
    },
    indentStyle: {
      marginLeft: ".8em",
    },
    itemStyle: {
      marginBottom: ".3em",
    },
    stickyStyle: {},
  };
  const debugArr = ["home", "item1", "item2", "item3"];
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setTabSwitch("home");
        }}
      >
        <Image src="/favicon.ico" size="small" />
        <h2 style={styles.nameStyle}>Chao Feng</h2>
        <span style={styles.subPosition}>Full Stack Developer</span>
      </div>
      <br />
      <div>
        <h3>Projects</h3>
        <List style={styles.indentStyle}>
          <List.Item
            style={styles.itemStyle}
            icon="folder"
            content={
              <a
                href="mailto:fnchao@hotmail.com"
                style={styles.linkStyle}
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
            style={styles.itemStyle}
            icon="folder"
            content={
              <a
                href="https://github.com/iTh1nk"
                style={styles.linkStyle}
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
            style={styles.itemStyle}
            icon="folder"
            content={
              <a
                href="https://twitter.com/_ith1nk"
                style={styles.linkStyle}
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
        <List style={styles.indentStyle}>
          <List.Item
            style={styles.itemStyle}
            icon="github"
            content={
              <a href="https://github.com/iTh1nk" style={styles.linkStyle}>
                Github
              </a>
            }
          />
          <List.Item
            style={styles.itemStyle}
            icon="linkedin"
            content={
              <a
                href="https://www.linkedin.com/in/chaofeng16/"
                style={styles.linkStyle}
              >
                LinkIn
              </a>
            }
          />
          <List.Item style={styles.itemStyle}>
            <List.Icon name="marker" />
            <List.Content
              style={styles.linkStyle}
              content={
                <a
                  href="https://goo.gl/maps/CGy8mmSajrxYQSNu6"
                  style={styles.linkStyle}
                >
                  Irvine, CA
                </a>
              }
            />
          </List.Item>
        </List>
        <h3>Contact</h3>
        <List style={styles.indentStyle}>
          <List.Item
            style={styles.itemStyle}
            icon="twitter"
            content={
              <a href="https://twitter.com/_ith1nk" style={styles.linkStyle}>
                Twitter
              </a>
            }
          />
          <List.Item
            style={styles.itemStyle}
            icon="facebook"
            content={
              <a
                href="https://www.facebook.com/iTh1nk"
                style={styles.linkStyle}
              >
                Facebook
              </a>
            }
          />
          <List.Item
            style={styles.itemStyle}
            icon="mail"
            content={
              <a href="mailto:fnchao@hotmail.com" style={styles.linkStyle}>
                fnchao@hotmail.com
              </a>
            }
          />
          <List.Item
            style={styles.itemStyle}
            icon="send"
            content={
              <a href="/message" style={styles.linkStyle}>
                Send Message
              </a>
            }
          />
        </List>
      </div>
    </>
  );
}
