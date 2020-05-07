import React, { Component, useContext, useEffect } from "react";
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

export default function HomeContainer() {
  const { visible, setVisible } = useContext(AssignContext);
  
  return (
    <>
      <Grid centered>
        <Grid.Column width={3}>
          <HomeLeft />
        </Grid.Column>
        <Grid.Column width={9}>
          <HomeRight />
        </Grid.Column>
      </Grid>
    </>
  );
}
