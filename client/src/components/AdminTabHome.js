import React, { useState, useEffect, useContext } from "react";
import { Segment } from "semantic-ui-react";
import Axios from "axios";
import { AssignContext } from "./AssignContext";

export default function Home() {
  const { isAuthorized, setIsAuthorized } = useContext(AssignContext);
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [isMessageLoading, setIsMessageLoading] = useState(true);
  const [postsCount, setPostsCount] = useState();
  const [messagesCount, setMessagesCount] = useState();
  useEffect(() => {
    Axios.get("http://54.64.29.178:8000/api/v1/posts/")
      .then((resp) => {
        setPostsCount(resp.data.length);
        setIsPostLoading(false);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    Axios.get("http://54.64.29.178:8000/api/v1/messages/", {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        if (resp.data.message === "nok") {
          setIsMessageLoading(false);
          return setIsAuthorized("**Your group does not have permission!**");
        }
        setMessagesCount(resp.data.length);
        setIsMessageLoading(false);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);
  return (
    <>
      <Segment>
        <h5>
          Notifications:<Segment>Ready to Admin.</Segment>
        </h5>
        <h5>
          Total Posts:<Segment loading={isPostLoading}>{postsCount}</Segment>
        </h5>
        <h5>
          Total Messages:
          <Segment loading={isMessageLoading}>
            {messagesCount}
            <div className="sui-error-message-custom">{isAuthorized}</div>
          </Segment>
        </h5>
      </Segment>
    </>
  );
}
