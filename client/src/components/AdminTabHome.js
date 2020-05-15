import React from "react";
import { Segment } from "semantic-ui-react";

export default function Home() {
  return (
    <>
      <Segment>
        <div>"ADMIN HOME"</div>
      </Segment>
      <Segment loading={true}>
        <div>
          "ADMIN <br />
          <br />
          <br />
          <br />
          <br />
          <br /> HOME"
        </div>
      </Segment>
    </>
  );
}
