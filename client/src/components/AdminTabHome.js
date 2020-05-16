import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import Axios from "axios";

export default function Home() {
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [isMessageLoading, setIsMessageLoading] = useState(true);
  const [postsCount, setPostsCount] = useState();
  const [messagesCount, setMessagesCount] = useState();
  Axios.get("http://localhost:8000/api/v1/posts/")
    .then((resp) => {
      setPostsCount(resp.data.length);
      setIsPostLoading(false);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  Axios.get("http://localhost:8000/api/v1/messages/", {
    headers: {
      Authorization: window.localStorage.getItem("auth"),
    },
  })
    .then((resp) => {
      setMessagesCount(resp.data.length);
      setIsMessageLoading(false);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
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
          <Segment loading={isMessageLoading}>{messagesCount}</Segment>
        </h5>
      </Segment>
    </>
  );
}
