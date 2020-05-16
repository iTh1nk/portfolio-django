import React, { useState, useReducer } from "react";
import { Image, Icon, Modal, Button, Header, Menu } from "semantic-ui-react";

export default function ModalResume() {
  const [activeItem, setActiveItem] = useState("");
  const [resumeTab, dispatch] = useReducer(reducer, <ResumeEn />);

  const handleItemClick = (e, name) => {
    e.preventDefault();
    setActiveItem(name);
    dispatch({ type: name });
    console.log(name);
  };

  function reducer(state, action) {
    switch (action.type) {
      case "English":
        return <ResumeEn />;
      case "中文":
        return <ResumeCn />;
      default:
        return <ResumeEn />;
    }
  }
  function ResumeEn() {
    return (
      <>
        <h3>Summary</h3>
        <h3>Experience</h3>
        <h3>Education</h3>
      </>
    );
  }
  function ResumeCn() {
    return (
      <>
        <h3>概览</h3>
        <h3>工作经验</h3>
        <h3>教育经历</h3>
      </>
    );
  }
  return (
    <Modal
      dimmer="blurring"
      trigger={
        <a
          href=""
          style={{
            color: "black",
          }}
        >
          <Icon name="sticky note" size="small" />
        </a>
      }
      closeIcon
    >
      <Modal.Header>Resume</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>
            <Menu pointing>
              <Menu.Item
                name="English"
                active={activeItem === "English"}
                onClick={(e, { name }) => handleItemClick(e, name)}
              />
              <Menu.Item
                name="中文"
                active={activeItem === "中文"}
                onClick={(e, { name }) => handleItemClick(e, name)}
              />
            </Menu>
          </Header>
          {resumeTab}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}
