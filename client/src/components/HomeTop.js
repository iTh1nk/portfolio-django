import React, { useContext, useState, useReducer } from "react";
import {
  Responsive,
  Segment,
  Image,
  List,
  Button,
  Grid,
  Menu,
  Input,
} from "semantic-ui-react";
import { AssignContext } from "./AssignContext";

export default function HomeLeft() {
  const { tabSwitch, setTabSwitch } = useContext(AssignContext);
  const [activeItem, setActiveItem] = useState("welcome");
  const [{ topTab }, dispatch] = useReducer(reducer, { topTab: <Welcome /> });
  function reducer(state, action) {
    switch (action.type) {
      case "welcome":
        return {
          topTab: <Welcome />,
        };
      case "project":
        return {
          topTab: <Project />,
        };
      case "about":
        return {
          topTab: <About />,
        };
      case "contact":
        return {
          topTab: <Contact />,
        };
      default:
        return <Welcome />;
    }
  }

  const styles = {
    topTitle: {
      fontWeight: "bold",
    },
    img: {
      paddingLeft: "5em",
    },
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

  function Welcome() {
    return (
      <>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column style={styles.img}>
              <Image src="/favicon.ico" size="small" />
            </Grid.Column>
            <Grid.Column>
              <h2 style={styles.nameStyle}>Chao Feng</h2>
              <span style={styles.subPosition}>Full Stack Developer</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
  function Project() {
    return (
      <>
        <Grid columns={2} centered>
          <Grid.Row>
            <Grid.Column>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
  function About() {
    return (
      <>
        <Grid columns={2} centered>
          <Grid.Row>
            <Grid.Column>
              <List style={styles.indentStyle}>
                <List.Item
                  style={styles.itemStyle}
                  icon="github"
                  content={
                    <a
                      href="https://github.com/iTh1nk"
                      style={styles.linkStyle}
                    >
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
  function Contact() {
    return (
      <>
        <Grid columns={2} centered>
          <Grid.Row>
            <Grid.Column>
              <List style={styles.indentStyle}>
                <List.Item
                  style={styles.itemStyle}
                  icon="twitter"
                  content={
                    <a
                      href="https://twitter.com/_ith1nk"
                      style={styles.linkStyle}
                    >
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
                    <a
                      href="mailto:fnchao@hotmail.com"
                      style={styles.linkStyle}
                    >
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }

  const debugArr = ["welcome", "item1", "item2", "item3"];
  // I'm Here
  return (
    <>
      {/* <div> */}
      <Menu secondary style={{ marginLeft: "2em", marginTop: "0em" }}>
        <Menu.Item
          style={styles.topTitle}
          name="welcome"
          active={activeItem === "welcome"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("welcome");
            dispatch({ type: "welcome" });
          }}
        />
        <Menu.Item
          style={styles.topTitle}
          name="project"
          active={activeItem === "project"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("project");
            dispatch({ type: "project" });
          }}
        />
        <Menu.Item
          style={styles.topTitle}
          name="about"
          active={activeItem === "about"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("about");
            dispatch({ type: "about" });
          }}
        />
        <Menu.Item
          style={styles.topTitle}
          name="contact"
          active={activeItem === "contact"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("contact");
            dispatch({ type: "contact" });
          }}
        />
      </Menu>
      {/* Top tab switch State */}
      {topTab}
    </>
  );
}
