import React, { useContext } from "react";
import { Image, List } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import cssJSON from "./cssJSON.json";
import HomeContact from "./HomeContact";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";

export default function HomeLeft() {
  const { setTabSwitch } = useContext(AssignContext);

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setTabSwitch("home");
        }}
      >
        <Image src="/favicon.ico" size="small" />
        <h2 style={cssJSON.nameStyle}>Chao Feng</h2>
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
