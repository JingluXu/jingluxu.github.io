import React from "react";
import { useState } from "react";
import { Link, Typography } from "@material-ui/core";
import ResumePDF from "./../../assets/jinglu-xu-resume.pdf";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  bar: {
    height: "100vh",
    width: "10%",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "6vh",
    },
  },
  link: {
    textDecoration: "none",
    color: "#455442",
    "&:hover": {
      color: "#8e8f27",
      textDecoration: "underline",
      transition: "all 0.4s ease 0s",
    },
  }
}));

export const SideNavbar = () => {

  const classes = useStyles();

  const [setActiveNav] = useState("#");

  return (
    <AppBar position="fixed"
      className={classes.bar}
      style={{
        backgroundColor: "#f4f4e9",
      }}
    >
      <Toolbar>
        <Link href="/#"
          onClick={() => setActiveNav("#")}
          underline="none"
          className={classes.link}
        >
          <Typography variant="body1">HOME</Typography>
        </Link>

        <Link href="#about"
          onClick={() => setActiveNav("#about")}
          underline="none"
          className={classes.link}
        >
          <Typography variant="body1">ABOUT</Typography>
        </Link>

        <Link href="#work"
          onClick={() => setActiveNav("#work")}
          underline="none"
          className={classes.link}
        >
          <Typography variant="body1">WORK</Typography>
        </Link>

        <Link href="#contact"
          onClick={() => setActiveNav("#contact")}
          underline="none"
          className={classes.link}
        >
          <Typography variant="body1">CONTACT</Typography>
        </Link>

        <Link href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          className={classes.link}
        >
          <Typography variant="body1">RESUME</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};