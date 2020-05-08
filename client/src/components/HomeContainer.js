import React, { Component, useContext, useEffect, useState } from "react";
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
  Button,
} from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import "./HomeContainer.css";

export default function HomeContainer() {
  const { visible, setVisible } = useContext(AssignContext);
  const [tabSwitch, setTabSwitch] = useState("welcome");

  const styles = {
    homeLeft: {
      display: "block",
      "@media screen and (max-width: 800px)": {
        display: "none",
      },
    },
  };

  return (
    <>
      <Grid centered>
        <AssignContext.Provider value={{ tabSwitch, setTabSwitch }}>
          <Grid.Column width={3} id="home-left">
            <HomeLeft />
          </Grid.Column>
          <Grid.Column> </Grid.Column>
          <Grid.Column width={9}>
            <HomeRight />
          </Grid.Column>
        </AssignContext.Provider>
      </Grid>
    </>
  );
}
