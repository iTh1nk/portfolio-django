import React, { useContext, useState, useReducer } from "react";
import { Image, List, Grid, Menu } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import cssJSON from "./cssJSON.json";
import HomeContact from "./HomeContact";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";

export default function HomeLeft() {
  const { setTabSwitch } = useContext(AssignContext);
  const [activeItem, setActiveItem] = useState("home");
  const [{ topTab }, dispatch] = useReducer(reducer, { topTab: <Home /> });
  function reducer(state, action) {
    switch (action.type) {
      case "home":
        return {
          topTab: <Home />,
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
        return <Home />;
    }
  }

  function Home() {
    return (
      <>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column style={cssJSON.img}>
              <Image
                src="/avatar.jpg"
                size="small"
                style={{
                  borderRadius: "20%",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              />
            </Grid.Column>
            <Grid.Column>
              <h2 style={cssJSON.nameStyle}>Chao Feng</h2>
              <span style={cssJSON.subPosition}>Full Stack Developer</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
  function Project() {
    return (
      <>
        <Grid columns={2} style={cssJSON.tabContent}>
          <Grid.Row>
            <Grid.Column>
              <HomeProject />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
  function About() {
    return (
      <>
        <Grid columns={2} style={cssJSON.tabContent}>
          <Grid.Row>
            <Grid.Column>
              <HomeAbout />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
  function Contact() {
    return (
      <>
        <Grid columns={2} style={cssJSON.tabContent}>
          <Grid.Row>
            <Grid.Column>
              <HomeContact />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }

  // I'm Here
  return (
    <>
      <Menu secondary style={{ marginLeft: "2.5em", marginTop: "0em" }}>
        <Menu.Item
          style={cssJSON.topTitle}
          name="home"
          active={activeItem === "home"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("home");
            dispatch({ type: "home" });
            setTabSwitch("home");
          }}
        />
        <Menu.Item
          style={cssJSON.topTitle}
          name="project"
          active={activeItem === "project"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("project");
            dispatch({ type: "project" });
          }}
        />
        <Menu.Item
          style={cssJSON.topTitle}
          name="about"
          active={activeItem === "about"}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem("about");
            dispatch({ type: "about" });
          }}
        />
        <Menu.Item
          style={cssJSON.topTitle}
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
