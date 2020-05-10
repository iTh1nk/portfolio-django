import React, { useState } from "react";
import {
  Icon,
  Menu,
  Sidebar,
  Grid,
} from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import HomeTop from "./HomeTop";
import "./HomeContainer.css";

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    visible={visible}
    width="thin"
  >
    <br />
    <a href="/">
      <Menu.Item>
        <Icon name="home" />
        Home
      </Menu.Item>
    </a>
    <a href="/admin">
      <Menu.Item>
        <Icon name="user" />
        Admin
      </Menu.Item>
    </a>
    <a href="/about">
      <Menu.Item>
        <Icon name="address card" />
        About
      </Menu.Item>
    </a>
  </Sidebar>
);

export default function SlideBar() {
  const [visible, setVisible] = useState(false);
  // const { visible, setVisible } = useContext(AssignContext);
  const [tabSwitch, setTabSwitch] = useState("home");

  return (
    <div>
      {/* <Icon
        name="adn"
        size="big"
        style={styles.overlayButton}
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
      /> */}
      {/* <Sidebar.Pushable style={{ marginTop: "1em" }} id="slide-bar">
        <HorizontalSidebar
          animation="overlay"
          direction="top"
          visible={visible}
        />

        <Sidebar.Pusher
          dimmed={false}
          onClick={(e) => {
            setVisible(false);
          }}
        > */}
              <AssignContext.Provider value={{ tabSwitch, setTabSwitch }}>
            <Grid centered>
                <Grid.Row>
                  <Grid.Column id="home-top">
                    <HomeTop />
                  </Grid.Column>
                </Grid.Row>
                <hr id="hrDivider" />
                <Grid.Row>
                  <Grid.Column width={3} id="home-left">
                    <HomeLeft />
                  </Grid.Column>
                  <Grid.Column id="home-mid"> </Grid.Column>
                  <Grid.Column width={9} id="home-right">
                    <HomeRight />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row> </Grid.Row>
            </Grid>
              </AssignContext.Provider>
        {/* </Sidebar.Pusher>
      </Sidebar.Pushable> */}
    </div>
  );
}
