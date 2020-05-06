import React from "react";
import { Responsive, Segment, Image, List } from "semantic-ui-react";

export default function HomeLeft() {
  const styles = {
    linkStyle: {
      color: "grey",
      "&:hover": {
        color: "red !important",
      },
    },
    indentStyle: {
      marginLeft: ".8em",
    },
    itemStyle: {
      marginBottom: ".3em",
    },
  };

  return (
    <>
      <div> 
        <Image src="/favicon.ico" size="small" />
        <h2>Chao Feng</h2>
      </div>
      <br />
      <br />
      <div>
        <h3>Projects</h3>
        <List style={styles.indentStyle}>
          <List.Item
            style={styles.itemStyle}
            icon="folder"
            content={
              <a href="mailto:fnchao@hotmail.com" style={styles.linkStyle}>
                Bill Book
              </a>
            }
          />
          <List.Item
            style={styles.itemStyle}
            icon="folder"
            content={
              <a href="https://github.com/iTh1nk" style={styles.linkStyle}>
                Covid-19 OC
              </a>
            }
          />
          <List.Item
            style={styles.itemStyle}
            icon="folder"
            content={
              <a href="https://twitter.com/_ith1nk" style={styles.linkStyle}>
                Safe Zone
              </a>
            }
          />
        </List>
        <h3>About</h3>
        <List style={styles.indentStyle}>
          <List.Item style={styles.itemStyle}>
            <List.Icon name="marker" />
            <List.Content style={styles.linkStyle}>Irvine, CA</List.Content>
          </List.Item>
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
