import React, { useState } from "react";
import { Responsive } from "semantic-ui-react";
import { Menu, Segment } from "semantic-ui-react";
import Signup from "./Signup";

export default function Admin() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, name) => setActiveItem(name);
  return (
    <>
      <Segment.Group>
        <Responsive as={Segment}>I'm always visible by default</Responsive>
      </Segment.Group>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={(e) => handleItemClick(e, "home")}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={(e) => handleItemClick(e, "messages")}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={(e) => handleItemClick(e, "friends")}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={(e) => handleItemClick(e, "logout")}
          />
        </Menu.Menu>
      </Menu>

      <Segment>
        <Signup />
      </Segment>
    </>
  );
}
