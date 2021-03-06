import React, { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";

export default function HomeRightPosts() {
  const [posts, setPosts] = useState(["NA"]);

  useEffect(() => {
    Axios.get(process.env.REACT_APP_API + "/api/v1/posts/")
      .then((resp) => {
        setPosts(resp.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  const styles = {
    subText: {
      color: "grey",
      display: "block",
    },
    content: {
      marginTop: "1em",
      width: "100%",
      fontFamily: "'Fira Sans Extra Condensed', sans-serif",
      fontSize: "1.3em",
      wordSpacing: ".1em",
      lineHeight: "1.5em"
    },
    author: {
      marginLeft: "1em",
    },
  };

  return (
    <>
      {posts[0] !== "NA" ? (
        posts.map((item, idx) => (
          <div key={idx}>
            <h1>{item.title}</h1>
            <span style={styles.subText}>
              {moment(item.created_on).format("MMMM YYYY, HH:mm")}
              <span style={styles.author}>- {item.author}</span>
            </span>
            {/* <p style={styles.content}>{item.content}</p> */}
            <div style={styles.content} className="ck-content" dangerouslySetInnerHTML={{__html: item.content}} />
            <br />
            <br />
          </div>
        ))
      ) : (
        <span>Hang on! All posts are on their way back...</span>
      )}
    </>
  );
}
