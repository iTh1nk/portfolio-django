import React from "react";
import { Segment, Icon } from "semantic-ui-react";

export default function AdminTopShow() {
  return (
    <>
      <Segment>
        <Icon
          name="home"
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/");
          }}
        />
      </Segment>
    </>
  );
}
