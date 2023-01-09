import React from "react";
import { useState } from "react";
import { Typography } from "@material-ui/core";
// import ResumePDF from './../../assets/jinglu-resume.pdf';

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="/#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography gutterBottom variant="h5">HOME</Typography>
      </a>

      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography gutterBottom variant="h5">ABOUT</Typography>
      </a>

      <a href="#work"
        onClick={() => setActiveNav('#work')}
        className={activeNav === '#work' ? 'active' : ''}
      >
        <Typography gutterBottom variant="h5">WORK</Typography>
      </a>

      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography gutterBottom variant="h5">CONTACT</Typography>
      </a>

      {/* <a href={`${ResumePDF}`} target='_blank' rel='noopener noreferrer'>
        <Typography gutterBottom variant="h5">RESUME</Typography>
      </a> */}
    </nav>
  );
};