import React from "react";
import { Segment } from "semantic-ui-react";

export default function AdminTabUsers() {
  const styles = {
    title: {
      fontSize: "1em",
      fontWeight: "bold",
      padding: ".5em",
    },
    body: {
      marginLeft: "1em",
    },
  };
  return (
    <>
      <Segment>
        <div style={styles.title}>In Progress...</div>
        <li style={styles.body}>Pagination</li>
        <li style={styles.body}>Make backend model for projects</li>
      </Segment>
      <Segment>
        <div style={styles.title}>Jul 2020</div>
        <li style={styles.body}>Start Making RNotes</li>
        <li style={styles.body}>Integrate CKEditor</li>
      </Segment>
    </>
  );
}
