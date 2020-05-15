import React, { useContext, useState, useReducer } from "react";
import {
  Image,
  List,
  Icon,
  Modal,
  Button,
  Header,
  Menu,
} from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import cssJSON from "./cssJSON.json";
import HomeContact from "./HomeContact";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";

export default function HomeLeft() {
  const { setTabSwitch } = useContext(AssignContext);
  const [activeItem, setActiveItem] = useState("");
  const [resumeTab, dispatch] = useReducer(reducer, <ResumeEn />);

  const handleItemClick = (e, name) => {
    e.preventDefault();
    setActiveItem(name);
    dispatch({ type: name });
    console.log(name);
  };

  function ResumeEn() {
    return <>En Resume</>;
  }
  function ResumeCn() {
    return <>Cn Resume</>;
  }

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

  function ModalResume() {
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
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary>Close</Button>
        </Modal.Actions>
      </Modal>
    );
  }

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setTabSwitch("home");
        }}
      >
        <Image
          src="/avatar.jpg"
          size="small"
          style={{
            borderRadius: "20%",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        />
        <h2 style={cssJSON.nameStyle}>
          Chao Feng <ModalResume />
        </h2>
        <span style={cssJSON.subPosition}>Full Stack Developer</span>
      </div>
      <br />
      <div>
        <h3>Projects</h3>
        <HomeProject />
        <h3>About</h3>
        <HomeAbout />
        <h3>Contact</h3>
        <HomeContact />
      </div>
    </>
  );
}
