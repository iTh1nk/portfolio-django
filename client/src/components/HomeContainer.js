// import React from "react";

// import HomeLeft from "./HomeLeft";
// import HomeRight from "./HomeRight";

// export default function HomeContainer() {
//   return (
//     <>
//       <HomeLeft />
//       <HomeRight />
//     </>
//   );
// }

import _ from "lodash";
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

const Placeholder = () => <Image src="/images/wireframe/paragraph.png" />;

export default class StickyExampleOffset extends Component {
  contextRef = createRef();

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment>
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              In a professional context it often happens that private or
              corporate clients corder a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that's filled with content hourly on the day of going live.
              However, reviewers tend to be distracted by comprehensible
              content, say, a random text copied from a newspaper or the
              internet. The are likely to focus on the text, disregarding the
              layout and its elements. Besides, random text risks to be
              unintendedly humorous or offensive, an unacceptable risk in
              corporate environments. Lorem ipsum and its many variants have
              been employed since the early 1960ies, and quite likely since the
              sixteenth century.
              <Rail position="left">
                {_.times(3, (i) => (
                  <Placeholder key={i} />
                ))}

                <Sticky context={this.contextRef} offset={100}>
                  <Header as="h3">Stuck Content</Header>
                  <Image src="/images/wireframe/image.png" />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
}
