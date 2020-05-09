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
import HomeTop from "./HomeTop";
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
          <Grid.Row>
            <Grid.Column id="home-top">
              <HomeTop />
            </Grid.Column>
          </Grid.Row>
              <hr id="hrDivider"/>
          <Grid.Row>
            <Grid.Column width={3} id="home-left">
              <HomeLeft />
            </Grid.Column>
            <Grid.Column id="home-mid"> </Grid.Column>
            <Grid.Column width={9} id="home-right">
              <HomeRight />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row> </Grid.Row>
        </AssignContext.Provider>
      </Grid>
    </>
  );
}
