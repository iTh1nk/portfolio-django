import React, { useState, useReducer, useContext } from "react";
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
import { AssignContext } from "./AssignContext";

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
    case "logout":
      return {
        ...state,
        logoutLoading: true,
      };
  }
}

function Home() {
  return (
    <>
      <Segment>
        <div>"ADMIN HOME"</div>
      </Segment>
      <Segment loading={true}>
        <div>
          "ADMIN <br />
          <br />
          <br />
          <br />
          <br />
          <br /> HOME"
        </div>
      </Segment>
    </>
  );
}
function AddUser() {
  return (
    <>
      <Segment>
        <div>"Add User"</div>
      </Segment>
    </>
  );
}
function AddPost() {
  return (
    <>
      <Segment>
        <div>"Add Post"</div>
      </Segment>
    </>
  );
}

export default function Admin() {
  const [{ tabAdmin, modalShow, logoutLoading }, dispatch] = useReducer(
    reducer,
    {
      tabAdmin: <Home />,
      modalShow: false,
      logoutLoading: false,
    }
  );
  const { setIsAuthenticated } = useContext(AssignContext);
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, name) => {
    e.preventDefault();
    setActiveItem(name);
    dispatch({ type: name });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "logout" });
    setTimeout(() => {
      localStorage.removeItem("auth");
      setIsAuthenticated(false);
      window.location.replace("/");
    }, 1000);
  };

  const styles = {
    container: {
      marginTop: "1em",
    },
    logout: {
      color: "red",
    },
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
            <Menu.Item
              style={styles.logout}
              name="logout"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "modalShow" });
              }}
            />
          </Menu.Menu>
        </Menu>
        {/* Admin Content */}
        {tabAdmin}
      </Container>

      <Modal open={modalShow} basic size="small" centered={false}>
        <Header>
          <Icon name="alarm" style={{ display: "inline-block" }} />
          Confirm Logout?
          <Icon
            name="home"
            style={{ position: "absolute", top: ".5em", right: "1em" }}
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/");
            }}
          />
        </Header>
        {/* <Modal.Content>
          <hr />
          <p>
            Confirm Logout? 
          </p>
        </Modal.Content> */}
        <Modal.Actions>
          <Button
            color="yellow"
            inverted
            onClick={(e) => handleLogout(e)}
            loading={logoutLoading}
          >
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
