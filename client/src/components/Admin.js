import React, { useState, useReducer, useContext, createRef } from "react";
import {
  Menu,
  Container,
  Modal,
  Icon,
  Button,
  Header,
} from "semantic-ui-react";
import Signup from "./Signup";
import { AssignContext } from "./AssignContext";
import Axios from "axios";
import AdminTopShow from "./AdminTopShow";
import Users from "./AdminTabUsers";
import Posts from "./AdminTabPosts";
import Messages from "./AdminTabMessages";
import Home from "./AdminTabHome";

function reducer(state, action) {
  switch (action.type) {
    case "home":
      return {
        ...state,
        tabAdmin: <Home />,
      };
    case "user tab":
      return {
        ...state,
        tabAdmin: <Users />,
      };
    case "post tab":
      return {
        ...state,
        tabAdmin: <Posts />,
      };
    case "message tab":
      return {
        ...state,
        tabAdmin: <Messages />,
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

export default function Admin(props) {
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
    console.log(props.axiosHeader);
    Axios.post(
      "http://localhost:8000/api/v1/logout/",
      { token: window.localStorage.getItem("auth") },
      {
        headers: {
          Authorization: window.localStorage.getItem("auth"),
        },
      }
    )
      .then((resp) => {
        console.log("Logged Out!");
        dispatch({ type: "logout" });
        localStorage.removeItem("auth");
        window.location.replace("/");
        setTimeout(() => {
          setIsAuthenticated(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const styles = {
    container: {
      marginTop: "1em",
    },
    logout: {
      color: "red",
    },
  };
  const contextRef = createRef();
  return (
    <>
      <Container style={styles.container}>
        <AdminTopShow />
        <Menu pointing secondary>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={(e) => handleItemClick(e, "home")}
          />
          <Menu.Item
            name="Posts"
            active={activeItem === "post tab"}
            onClick={(e) => handleItemClick(e, "post tab")}
          />
          <Menu.Item
            name="Messages"
            active={activeItem === "message tab"}
            onClick={(e) => handleItemClick(e, "message tab")}
          />
          <Menu.Item
            name="Users"
            active={activeItem === "user tab"}
            onClick={(e) => handleItemClick(e, "user tab")}
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
