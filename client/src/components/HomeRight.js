import React, { useContext, useEffect } from "react";
import { AssignContext } from "./AssignContext";
import { List, Icon, Image } from "semantic-ui-react";
import TextLoop from "react-text-loop";

export default function HomeRight() {
  const { tabSwitch, setTabSwitch } = useContext(AssignContext);
  useEffect(() => {}, [tabSwitch]);

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
  };

  function Home() {
    return (
      <>
        <TextLoop interval="3000">
          <h1 style={styles.titleStyle}>Welcome~~ 😄</h1>
          <h1 style={styles.titleStyle}>你好 👋</h1>
        </TextLoop>
        <div style={styles.mainParagraph}>
          <p>My name is Chao Feng. Welcome to my tiny but growing HOME! </p>
        </div>
      </>
    );
  }

  function Item1() {
    return (
      <>
        <div>
          <h1 style={styles.titleStyle}>Bill Book</h1>
          <Image src="/bill-book.ico" style={styles.titleImage} />
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
          <h1 style={styles.titleStyle}>Covid-19 OC</h1>
          <Image src="/covid.ico" style={styles.titleImage} />
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
          <h1 style={styles.titleStyle}>Safe Zone</h1>
          <Image src="/safe-zone.ico" style={styles.titleImage} />
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

  if (tabSwitch === "home") {
    return (
      <>
        <Home />
      </>
    );
  }
  if (tabSwitch === "item1") {
    return (
      <>
        <Item1 />
      </>
    );
  }
  if (tabSwitch === "item2") {
    return (
      <>
        <Item2 />
      </>
    );
  }
  if (tabSwitch === "item3") {
    return (
      <>
        <Item3 />
      </>
    );
  }

  return (
    <>
      <h1>DEBUG</h1>
      This guide shows you how to build a sample app doing various things with
      "social login" using OAuth 2.0 and Spring Boot. It starts with a simple,
      single-provider single-sign on, and works up to a client with a choice of
      authentication providers: GitHub or Google. The samples are all
      single-page apps using Spring Boot and Spring Security on the back end.
      They also all use plain jQuery on the front end. But, the changes needed
      to convert to a different JavaScript framework or to use server-side
      rendering would be minimal. All samples are implemented using the native
      OAuth 2.0 support in Spring Boot. There are several samples building on
      each other, adding new features at each step:
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      This guide shows you how to build a sample app doing various things with
      "social login" using OAuth 2.0 and Spring Boot. It starts with a simple,
      single-provider single-sign on, and works up to a client with a choice of
      authentication providers: GitHub or Google. The samples are all
      single-page apps using Spring Boot and Spring Security on the back end.
      They also all use plain jQuery on the front end. But, the changes needed
      to convert to a different JavaScript framework or to use server-side
      rendering would be minimal. All samples are implemented using the native
      OAuth 2.0 support in Spring Boot. There are several samples building on
      each other, adding new features at each step:
      <br />
    </>
  );
}
