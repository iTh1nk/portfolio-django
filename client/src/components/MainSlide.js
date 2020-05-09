import React, { useState, useContext } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
} from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import HomeContainer from "./HomeContainer";

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

  return (
    <div>
      {/* <Button
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
      >
        MainSlide
      </Button> */}
      <Sidebar.Pushable style={{ marginTop: "1.5em" }} id="slide-bar">
        <HorizontalSidebar animation="push" direction="top" visible={visible} />

        <Sidebar.Pusher
          dimmed={visible}
          onClick={(e) => {
            setVisible(false);
          }}
        >
          <AssignContext.Provider value={{ visible, setVisible }}>
            <HomeContainer />
          </AssignContext.Provider>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
