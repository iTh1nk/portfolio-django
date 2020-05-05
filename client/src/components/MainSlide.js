import React, { useState } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <a href="/">
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
    </a>
    <a href="/admin">
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Admin
      </Menu.Item>
    </a>
    <a href="/about">
      <Menu.Item as="a">
        <Icon name="camera" />
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
        <VerticalSidebar
          animation="slide along"
          direction="left"
          visible={visible}
        />

        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="/favicon.ico" />
            <Image src="/favicon.ico" />
            <Image src="/favicon.ico" />
            <Image src="/favicon.ico" />
            <Image src="/favicon.ico" />
            <Image src="/favicon.ico" />
            <Image src="/favicon.ico" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
