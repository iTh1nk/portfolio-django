import React, { useState, useReducer } from "react";
import {
  Menu,
  Segment,
  Container,
  Modal,
  Icon,
  Button,
  Header,
} from "semantic-ui-react";
import Signup from "./Signup";

function Home() {
  return (
    <>
      <div>"ADMIN HOME"</div>
    </>
  );
}
function AddUser() {
  return (
    <>
      <div>"Add User"</div>
    </>
  );
}
function AddPost() {
  return (
    <>
      <div>"Add Post"</div>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "home":
      return {
        ...state,
        tabAdmin: <Home />,
      };
    case "add user":
      return {
        ...state,
        tabAdmin: <AddUser />,
      };
    case "add post":
      return {
        ...state,
        tabAdmin: <AddPost />,
      };
    case "modalShow":
      return {
        ...state,
        modalShow: true,
      };
    case "modalHide":
      return {
        ...state,
        modalShow: false,
      };
  }
}

export default function Admin() {
  const [{ tabAdmin, modalShow }, dispatch] = useReducer(reducer, {
    tabAdmin: <Home />,
    modalShow: false,
  });
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, name) => {
    e.preventDefault();
    setActiveItem(name);
    dispatch({ type: name });
  };

  const handleLogout = () => {
    dispatch({ type: "modalShow" });
    return "Logged Out";
  };

  const styles = {
    container: {
      marginTop: "1em",
    },
    logout: {
      color: "red"
    }
  };
  return (
    <>
      <Container style={styles.container}>
        <Menu pointing secondary>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={(e) => handleItemClick(e, "home")}
          />
          <Menu.Item
            name="Edit Posts"
            active={activeItem === "add post"}
            onClick={(e) => handleItemClick(e, "add post")}
          />
          <Menu.Item
            name="Edit Users"
            active={activeItem === "add user"}
            onClick={(e) => handleItemClick(e, "add user")}
          />
          <Menu.Menu position="right">
            <Menu.Item style={styles.logout} name="logout" onClick={(e) => handleLogout(e)} />
          </Menu.Menu>
        </Menu>

        <Segment>{tabAdmin}</Segment>
      </Container>

      <Modal open={modalShow} basic size="small">
        <Header icon="alarm" content="Confirm Logout? " />
        {/* <Modal.Content>
          <hr />
          <p>
            Confirm Logout? 
          </p>
        </Modal.Content> */}
        <Modal.Actions>
          <Button color="yellow" inverted>
            <Icon name="checkmark" /> Yes
          </Button>
          <Button
            color="blue"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "modalHide" });
            }}
          >
            <Icon name="remove" /> No
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
