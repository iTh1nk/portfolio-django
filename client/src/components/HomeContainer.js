import React, { Component, createRef } from "react";
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from "semantic-ui-react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

export default class StickyExampleOffset extends Component {
  contextRef = createRef();

  render() {
    return (
      <>
        <Grid centered>
          <Ref innerRef={this.contextRef}>
            <Grid.Row style={{ marginLeft: "15em" }}>
              <Grid.Column width={10}>
                <HomeRight />
                <Rail attached position="left">
                  <Sticky context={this.contextRef} offset={70}>
                    <HomeLeft />
                  </Sticky>
                </Rail>
              </Grid.Column>
            </Grid.Row>
          </Ref>
        </Grid>
      </>
    );
  }
}
