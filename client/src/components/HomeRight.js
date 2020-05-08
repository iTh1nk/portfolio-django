import React, { useContext, useEffect } from "react";
import { AssignContext } from "./AssignContext";
import { Button } from "semantic-ui-react";
import TextLoop from "react-text-loop";

export default function HomeRight() {
  const { tabSwitch, setTabSwitch } = useContext(AssignContext);
  useEffect(() => {}, [tabSwitch]);

  const styles = {
    titleStyle: {
      color: "#e95421",
    },
    mainParagraph: {
      marginTop: "2em",
    },
  };

  function Welcome() {
    return (
      <>
        <TextLoop interval="3000">
          <h1 style={styles.titleStyle}>Welcome~~ 😄</h1>
          <h1 style={styles.titleStyle}>你好 👋</h1>
        </TextLoop>
        <div style={styles.mainParagraph}>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
        </div>
      </>
    );
  }

  function Item1() {
    return (
      <>
        <h1 style={styles.titleStyle}>Item 1</h1>
        <div style={styles.mainParagraph}>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
        </div>
      </>
    );
  }

  function Item2() {
    return (
      <>
        <h1 style={styles.titleStyle}>Item 2</h1>
        <div style={styles.mainParagraph}>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
        </div>
      </>
    );
  }

  function Item3() {
    return (
      <>
        <h1 style={styles.titleStyle}>Item 3</h1>
        <div style={styles.mainParagraph}>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
          <p>Here will be main contents...</p>
        </div>
      </>
    );
  }

  if (tabSwitch === "welcome") {
    return (
      <>
        <Welcome />
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
