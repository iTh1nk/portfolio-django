import React, { useEffect, useState, useContext } from "react";
import {
  Segment,
  Form,
  Button,
  Checkbox,
  Grid,
  Dropdown,
} from "semantic-ui-react";
import Axios from "axios";
import "./ErrorMessage.css";
import moment from "moment";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import { AssignContext } from "./AssignContext";

let dropDownArray = [];

export default function Posts() {
  const { isAuthorized } = useContext(AssignContext);
  const [isClicked, setIsClicked] = useState();
  const [isHidden, setIsHidden] = useState("none");
  const handleToaster = (content) => {
    toaster.notify(
      <div style={{ fontWeight: "bold", color: "darkgreen" }}>{content}</div>,
      {
        duration: 3000,
      }
    );
  };
  const [selectedPost, setSelectedPost] = useState([
    { title: "", author: "", content: "" },
  ]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get(process.env.REACT_APP_API + "/api/v1/posts/")
      .then((resp) => {
        dropDownArray = [];
        setPosts(resp.data);
        resp.data.map((item, idx) => {
          dropDownArray.push({ key: idx, text: item.title, value: item.id });
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, [isClicked]);
  const [inputError, setInputError] = useState("");
  const [inputErrorEdit, setInputErrorEdit] = useState("");
  const handleSubmit = (e) => {
    if (isAuthorized) {
      handleReset();
      return setInputError(isAuthorized);
    }
    let data = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      content: document.getElementById("content").value,
    };
    if (!(data.title && data.author && data.content)) {
      return setInputError("All create fields are required!");
    }
    Axios.post(process.env.REACT_APP_API + "/api/v1/posts/add/", data, {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        if (resp.data.message === "ok") {
          console.log("Posted!");
          setIsClicked(!isClicked);
          handleReset();
          handleToaster("Posted!");
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
    Axios.delete(process.env.REACT_APP_API + "/api/v1/posts/del/" + id, {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        console.log("Deleted!");
        setIsClicked(!isClicked);
        handleToaster("Deleted!");
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    if (isAuthorized) {
      return setInputErrorEdit(isAuthorized);
    }
    let data = {
      title: document.getElementById("titleEdit").value,
      author: document.getElementById("authorEdit").value,
      content: document.getElementById("contentEdit").value,
    };
    if (!(data.title && data.author && data.content)) {
      return setInputErrorEdit("All edit fields are required!");
    }
    Axios.put(process.env.REACT_APP_API + "/api/v1/posts/put/" + id, data, {
      headers: {
        Authorization: window.localStorage.getItem("auth"),
      },
    })
      .then((resp) => {
        handleToaster("Updated!");
        setSelectedPost({ title: "", author: "", content: "" });
        setIsHidden("none");
        setIsClicked(!isClicked);
        handleReset();
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setInputErrorEdit("Select post first!");
        }
      });
  };
  const handleErrorOnChange = (e) => {
    e.preventDefault();
    setInputError("");
    setInputErrorEdit("");
  };
  const handleSelectionChange = (e, id) => {
    Axios.get(process.env.REACT_APP_API + "/api/v1/post/" + id)
      .then((resp) => {
        setSelectedPost(resp.data);
        setIsHidden("inline");
        console.log(resp.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setSelectedPost({ title: "", author: "", content: "" });
        }
      });
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
      lineHeight: ".1em",
    },
  };
  return (
    <>
      <Segment>
        <h3>Add New Post: </h3>
        <Segment>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Field>
              <label>Title</label>
              <Form.Input
                id="title"
                placeholder="Input title..."
                onChange={(e) => handleErrorOnChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <label>Author</label>
              <Form.Input
                id="author"
                placeholder="Input author..."
                defaultValue="Chao"
                onChange={(e) => handleErrorOnChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <label>Content</label>
              <textarea
                id="content"
                placeholder="Input content..."
                onChange={(e) => handleErrorOnChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Pin to Top?" />
            </Form.Field>
            <Button type="submit" color="blue" size="mini">
              Submit
            </Button>
            <Button onClick={(e) => handleReset(e)} size="mini">
              Reset
            </Button>
            {inputError && (
              <span className="sui-error-message-custom">{inputError}</span>
            )}
          </Form>
        </Segment>
      </Segment>

      <Segment>
        <h3>Delete Post: </h3>
        <Segment>
          {isAuthorized ? (
            <div className="sui-error-message-custom">{isAuthorized}</div>
          ) : (
            posts.map((item, idx) => (
              <div key={idx} style={styles.delete}>
                <h5>
                  {idx + 1}: {item.title}
                </h5>
                <span>
                  {moment(item.created_on).format("MMMM YYYY, HH:mm")}
                </span>
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
            ))
          )}
        </Segment>
      </Segment>

      <Segment>
        <h3>Edit Post: </h3>
        <Segment>
          <Dropdown
            clearable
            fluid
            options={dropDownArray}
            selection
            placeholder="Select Post to Edit..."
            onChange={(e, { value }) => handleSelectionChange(e, value)}
          />
          <div style={{ marginTop: "2em" }}>
            <Form
              onSubmit={(e) => handleEdit(e, selectedPost.id)}
              style={{ display: isHidden }}
            >
              <Form.Field>
                <label>Title</label>
                <Form.Input
                  id="titleEdit"
                  placeholder="Input title..."
                  onChange={(e) => handleErrorOnChange(e)}
                  defaultValue={selectedPost.title}
                />
              </Form.Field>
              <Form.Field>
                <label>Author</label>
                <Form.Input
                  id="authorEdit"
                  placeholder="Input author..."
                  defaultValue="Chao"
                  onChange={(e) => handleErrorOnChange(e)}
                  defaultValue={selectedPost.author}
                />
              </Form.Field>
              <Form.Field>
                <label>Content</label>
                <textarea
                  id="contentEdit"
                  placeholder="Input content..."
                  onChange={(e) => handleErrorOnChange(e)}
                  defaultValue={selectedPost.content}
                />
              </Form.Field>
              <Button type="submit" color="blue" size="mini">
                Confirm
              </Button>
              {inputErrorEdit && (
                <span className="sui-error-message-custom">
                  {inputErrorEdit}
                </span>
              )}
            </Form>
          </div>
        </Segment>
      </Segment>
      <Grid>
        <Grid.Row></Grid.Row>
      </Grid>
    </>
  );
}
