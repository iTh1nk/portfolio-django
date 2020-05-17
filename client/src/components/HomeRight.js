import React, { useContext, useState } from "react";
import { AssignContext } from "./AssignContext";
import { List, Icon, Image } from "semantic-ui-react";
import TextLoop from "react-text-loop";
import {
  Form,
  Button,
  Input,
  Dropdown,
  TextArea,
  Checkbox,
} from "formik-semantic-ui";
import * as Yup from "yup";
import HomeRightPosts from "./HomeRightPosts";
import "./ErrorMessage.css";
import Axios from "axios";
import toaster from "toasted-notes";
import ModalResume from "./ModalResume";

export default function HomeRight() {
  const { tabSwitch } = useContext(AssignContext);
  const [messageError, setMessageError] = useState("");

  const handleToaster = (content) => {
    toaster.notify(
      <div style={{ fontWeight: "bold", color: "darkgreen" }}>{content}</div>,
      {
        duration: 3000,
      }
    );
  };

  const styles = {
    listIcon: ">",
    listStyle: {
      // fontSize: "1.3em",
      // wordSpacing: ".1em",
    },
    titleStyle: {
      color: "#e95421",
      display: "inline-block",
    },
    titleImage: {
      width: "2.3em",
      height: "2.3em",
      display: "inline-block",
      marginBottom: "1em",
      marginLeft: "1.3em",
    },
    mainParagraph: {
      marginTop: "2em",
      width: "100%",
      fontFamily: "'Fira Sans Extra Condensed', sans-serif",
      fontSize: "1.3em",
      wordSpacing: ".1em",
    },
    hr: {
      marginTop: "3em",
      marginBottom: "3em",
    },
  };

  function Home() {
    return (
      <>
        <TextLoop interval="3000">
          <h1 style={styles.titleStyle}>
            Ciao~~{" "}
            <span role="img" aria-label="str">
              😄
            </span>
          </h1>
          <h1 style={styles.titleStyle}>
            你好{" "}
            <span role="img" aria-label="str">
              👋
            </span>
          </h1>
        </TextLoop>
        <div style={styles.mainParagraph}>
          <p>
            Welcome to my{" "}
            <a href="https://github.com/iTh1nk/portfolio-django">
              "HOME
              <Icon name="code" size="small" />
            </a>
            "! My name is Chao Feng. Here, you will find something about me!{" "}
            <a href="/admin" style={{ color: "black" }}>
              <Icon name="user secret" />
            </a>
          </p>
          <p>
            I'm a Full Stack Developer. Familiar with major languages and
            frameworks including MERN, Django, Spring, PostgresSQL, AWS
            deployment.{" "}
            <span
              style={{
                fontStyle: "italic",
                fontSize: ".8em",
                color: "darkblue",
              }}
            >
              {"{Need More Info ? "}
            </span>
            <ModalResume />
            <span
              style={{
                fontStyle: "italic",
                fontSize: ".8em",
                color: "darkblue",
              }}
            >
              {" : Continue}"}
            </span>
          </p>
          <p>
            I am currently looking for a full-time job. If want a talk, please
            reach out to me through 'Contact' section. Thanks.
          </p>
        </div>
        <hr style={styles.hr} />
        <HomeRightPosts />
      </>
    );
  }

  function Item1() {
    return (
      <>
        <div>
          <a href="https://github.com/iTh1nk/billbook-v">
            <h1 style={styles.titleStyle}>Bill Book</h1>
            <Image src="/bill-book.ico" style={styles.titleImage} />
          </a>
        </div>
        <div style={styles.mainParagraph}>
          <List as="ol" style={styles.listStyle}>
            <List.Item as="li" value={styles.listIcon}>
              <p>This is a billing management app for mobile carrier bills;</p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>React as front end and Node as backend;</p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>Only authenticated user can use this app;</p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Designed admin management page to add, update, or delete users,
                billing cycles, or statements;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>Both front and back end are protected by authentication;</p>
            </List.Item>
            <hr />
            <List.Item as="li" value={styles.listIcon}>
              <p>
                The app use Formik, Yup to do real-time form check include
                userID and PIN;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Using React Hooks to display admin page tabs, user name, and
                share state value between different components;
              </p>
            </List.Item>
          </List>
        </div>
      </>
    );
  }

  function Item2() {
    return (
      <>
        <div>
          <a href="https://github.com/iTh1nk/covid19-react-spring">
            <h1 style={styles.titleStyle}>Covid-19 OC</h1>
            <Image src="/covid.ico" style={styles.titleImage} />
          </a>
        </div>
        <div style={styles.mainParagraph}>
          <List as="ol" style={styles.listStyle}>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                This app is designed for gathering Covid-19 cases for Irvine,
                Orange County, and also US on daily bases;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>All data was retrieved from official health department;</p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Multi-language is supported in this app: English and Mandarin;
              </p>
            </List.Item>
            <hr />
            <List.Item as="li" value={styles.listIcon}>
              <p>
                App front end uses React.js, back end uses Java Spring, and
                database uses MySQL;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                App includes an admin page for CRUDing toaster notification and
                potentially for daily data;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                In order to easily switch between multi-language, all texts are
                stored in a .json file since there are only few texts needed in
                this app;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                React hook useContext is used to physically switch between
                languages;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>JWT has been implemented.</p>
            </List.Item>
          </List>
        </div>
      </>
    );
  }

  function Item3() {
    return (
      <>
        <div>
          <a href="https://github.com/iTh1nk/Safe-Zone">
            <h1 style={styles.titleStyle}>Safe Zone</h1>
            <Image src="/safe-zone.ico" style={styles.titleImage} />
          </a>
        </div>
        <div style={styles.mainParagraph}>
          <List as="ol" style={styles.listStyle}>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Safe Zone app is designed to help people living in local
                community be aware of what is happening around to avoid
                dangerous situations like crime or wild animals;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Users can check on specific address through auto-fill address
                form to see if anything should be paid attention to;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                It is useful in some situations like if user want to run around
                community at night but do know if there is something danger
                happening that has been seen by other neighbors;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                The app provides real-time chat function for users who logged
                in; for logged in users, they can post anything they have been
                discovered;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Interface is extreme friendly. Users can input address they want
                to check, and the app will show map and popups give details back
                to users;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                There are pre-defined 5 Levels people can post based on how
                dangerous is the situation; All data is saved in database;
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                The app gives certain group of users like "admin" group ability
                to delete posts;
              </p>
            </List.Item>
            <hr />
            <List.Item as="li" value={styles.listIcon}>
              <p>
                Technologies that are used for this app includes: Node.JS,
                Express.JS, Passport.JS, Socket.IO, Moment.JS, Express Session,
                Cheerio, React.JS, React-BootStrap, MongoDB, etc.
              </p>
            </List.Item>
            <List.Item as="li" value={styles.listIcon}>
              <p>
                The app use Leafmap API to pull geo-location data, and local
                crime headlines from OCRegister;
              </p>
            </List.Item>
          </List>
        </div>
      </>
    );
  }

  function SendMessage() {
    return (
      <>
        <Form
          initialValues={{
            email: "",
            name: "",
            message: "",
            likeMe: false,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            message: Yup.string().required("Message is required"),
          })}
          onSubmit={(values, formikApi) => {
            let data = {
              username: values.name,
              message: values.message,
              isLike: values.likeMe,
            };
            Axios.post("http://54.64.29.178:8000/api/v1/messages/add/", data)
              .then((resp) => {
                if (resp.data.message === "ok") {
                  handleToaster("Message Sent. Thanks!");
                  setTimeout(() => {
                    formikApi.setSubmitting(false);
                    window.location.replace("/");
                  }, 2000);
                }
              })
              .catch((err) => {
                if (err) {
                  console.log(err);
                  setMessageError("Something went wrong! Try later~");
                  setTimeout(() => {
                    setMessageError("");
                    window.location.replace("/");
                  }, 5000);
                }
              });
          }}
          render={({ handleReset }, errors) => (
            <Form.Children>
              <Input label="Name" name="name" />
              <TextArea label="Message" name="message" />
              <Checkbox label="Like my website?" name="likeMe" />
              <Button.Submit
                primary
                content="Submit"
                style={{ marginRight: "1em" }}
              />
              <Button type="button" onClick={handleReset} content="Reset" />
              {messageError && (
                <span className="sui-error-message-custom">{messageError}</span>
              )}
            </Form.Children>
          )}
        />
      </>
    );
  }

  if (tabSwitch === "item1") {
    return (
      <>
        <Item1 />
      </>
    );
  } else if (tabSwitch === "item2") {
    return (
      <>
        <Item2 />
      </>
    );
  } else if (tabSwitch === "item3") {
    return (
      <>
        <Item3 />
      </>
    );
  } else if (tabSwitch === "sendMessage") {
    return (
      <>
        <SendMessage />
      </>
    );
  }

  return (
    <>
      <Home />
    </>
  );
}
