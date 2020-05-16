import React, { useContext, useState, useReducer } from "react";
import { Image } from "semantic-ui-react";
import { AssignContext } from "./AssignContext";
import cssJSON from "./cssJSON.json";
import HomeContact from "./HomeContact";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";
import ModalResume from "./ModalResume";

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
