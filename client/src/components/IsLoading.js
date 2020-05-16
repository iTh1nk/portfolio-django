import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export default function IsLoading() {
  const styles = {
    loading: {
      position: "absolute",
      top: "5em",
      left: "50%",
    },
  };
  return (
    <>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    </>
  );
}
