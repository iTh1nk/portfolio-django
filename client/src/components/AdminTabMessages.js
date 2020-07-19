import React, { useEffect, useState, useContext } from "react";
import { Segment, Button } from "semantic-ui-react";
import Axios from "axios";
import moment from "moment";
import { AssignContext } from "./AssignContext";

export default function Messages() {
  const { isAuthorized } = useContext(AssignContext);
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    Axios.get(process.env.REACT_APP_API + "/api/v1/messages/", {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        setIsPostLoading(false);
        setMessages(resp.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, [isClicked]);
  const handleSubmit = (e, id) => {
    e.preventDefault();
    Axios.delete(process.env.REACT_APP_API + "/api/v1/messages/del/" + id, {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        setIsPostLoading(false);
        console.log("Deleted!");
        setIsClicked(!isClicked);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const styles = {
    username: {
      color: "grey",
      marginRight: "1em",
    },
    isLike: {
      color: "grey",
      marginRight: "1em",
    },
    date: {
      color: "grey",
    },
    message: {
      fontWeight: "bolder",
      marginBottom: "1em",
      marginRight: "1em",
    },
    button: {
      lineHeight: ".1em",
    },
  };
  return (
    <>
      <Segment>
        <h3>Manage Messages</h3>
        <Segment loading={isPostLoading}>
          {isAuthorized ? (
            <div className="sui-error-message-custom">{isAuthorized}</div>
          ) : (
            messages.map((item, idx) => (
              <div key={idx}>
                <span style={styles.username}>{item.username}</span>
                <span style={styles.isLike}>
                  {item.is_like ? "Liked" : "Nah"}
                </span>
                <span style={styles.date}>
                  {moment(item.created_on).format("MMMM YYYY, HH:mm:ss")}
                </span>
                <br />
                <span style={styles.message}>{item.message}</span>
                <Button
                  style={styles.button}
                  size="mini"
                  color="red"
                  onClick={(e) => handleSubmit(e, item.id)}
                >
                  Del
                </Button>
                <br />
                <br />
              </div>
            ))
          )}
        </Segment>
      </Segment>
    </>
  );
}
