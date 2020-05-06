import React, { useState } from "react";
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
      <Button
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
      >
        Menu
      </Button>
      <Sidebar.Pushable as={Segment}>
        <HorizontalSidebar
          animation="overlay"
          direction="top"
          visible={visible}
        />

        <Sidebar.Pusher
          dimmed={visible}
          onClick={(e) => {
            setVisible(false);
          }}
        >
          <Segment basic>
            <br />
            <br />
            <br />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <HomeContainer />
    </div>
  );
}
