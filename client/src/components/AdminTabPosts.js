import React, { useEffect, useState } from "react";
import { Segment, Form, Button, Checkbox, Grid } from "semantic-ui-react";
import Axios from "axios";
import "./ErrorMessage.css";
import moment from "moment";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export default function Posts() {
  const handleToaster = (content) => {
    toaster.notify(
      <div style={{ fontWeight: "bold", color: "darkgreen" }}>{content}</div>,
      {
        duration: 3000,
      }
    );
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/v1/posts/")
      .then((resp) => {
        setPosts(resp.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);
  const [inputError, setInputError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const handleSubmit = (e) => {
    let data = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      content: document.getElementById("content").value,
    };
    if (!(data.title && data.author && data.content)) {
      return setInputError("All fields are required!");
    }
    Axios.post("http://localhost:8000/api/v1/posts/add/", data, {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        if (resp.data.message === "ok") {
          console.log("Posted!");
          setSubmitMessage("Posted!");
          handleReset();
          handleToaster("Posted!")
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const handleDel = (e, id) => {
    e.preventDefault();
    Axios.delete("http://localhost:8000/api/v1/posts/del/" + id, {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        console.log("Deleted!");
        setSubmitMessage("Deleted!");
        handleToaster("Deleted!");
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    setInputError("");
    setSubmitMessage("");
  };
  const handleReset = (e) => {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";
  };
  const styles = {
    delete: { marginBottom: "2em" },
    delButton: {
      marginLeft: "1em",
    },
  };
  return (
    <>
      <Segment>
        <h3>Add New Post</h3>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Field>
            <label>Title</label>
            <Form.Input
              id="title"
              placeholder="Input title..."
              onChange={(e) => handleOnChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Author</label>
            <Form.Input
              id="author"
              placeholder="Input author..."
              defaultValue="Chao"
              onChange={(e) => handleOnChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <textarea
              id="content"
              placeholder="Input content..."
              onChange={(e) => handleOnChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Pin to Top?" />
          </Form.Field>
          <Button type="submit">Submit</Button>
          <Button onClick={(e) => handleReset(e)}>Reset</Button>
          {inputError && (
            <span className="sui-error-message-custom">{inputError}</span>
          )}
        </Form>
      </Segment>

      <Segment>
        <h3>Delete Post</h3>
        {posts.map((item, idx) => (
          <div key={idx} style={styles.delete}>
            <h5>
              {idx + 1}: {item.title}
            </h5>
            <span>{moment(item.created_on).format("MMMM YYYY, HH:mm")}</span>
            <Button
              size="mini"
              basic
              color="red"
              style={styles.delButton}
              onClick={(e) => handleDel(e, item.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </Segment>

      <Segment>
        <h3>Edit Post</h3>
      </Segment>
      <Grid>
        <Grid.Row></Grid.Row>
      </Grid>
    </>
  );
}
