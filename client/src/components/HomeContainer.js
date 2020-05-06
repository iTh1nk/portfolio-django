import React, { Component, createRef } from "react";
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
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

export default class StickyExampleOffset extends Component {
  contextRef = createRef();

  render() {
    return (
      <>
        <Grid>
          <Grid.Column width={3} style={{ marginLeft: "5%" }}>
            <HomeLeft />
          </Grid.Column>
          <Grid.Column width={9} style={{ marginLeft: "5%" }}>
            <HomeRight />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
