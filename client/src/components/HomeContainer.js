import React, { Component, useContext } from "react";
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
          <Button
            onClick={(e) => {
              e.preventDefault();
              setVisible(true);
            }}
          >
            HomeContainer Left
          </Button>
          <HomeLeft />
        </Grid.Column>
        <Grid.Column width={9}>
          <HomeRight />
        </Grid.Column>
      </Grid>
    </>
  );
}
