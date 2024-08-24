import { Link, Typography } from "@material-ui/core";
import ResumePDF from "./../../assets/jinglu-xu-resume.pdf";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import { SideBar } from "./SideBar";

const useStyles = makeStyles((theme) => ({
  bar: {
    height: "100vh",
    width: "7rem",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "3.5rem",
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

const ChangeOnScroll = props => {
  const trigger = useScrollTrigger();
  // return React.cloneElement(props.children, {
  //   style: {
  //     backgroundColor: trigger ? "#f4f4e9" : "transparent",
  //     transition: trigger ? "0.3s" : "0.5s",
  //   }
  // });
  return (
    <Fade in={!trigger}>
      {props.children}
    </Fade>
  );
}

export const SideNavbar = props => {

  const classes = useStyles();

  return (
    <ChangeOnScroll {...props}>
      <AppBar position="fixed"
        className={classes.bar}
        style={{
          backgroundColor: "#f4f4e9",
        }}
      >
        <Toolbar>
          <SideBar link="/#" title="#" style={classes.link} name="HOME" />
          <SideBar link="#about" title="#about" style={classes.link} name="ABOUT" />
          <SideBar link="#work" title="#work" style={classes.link} name="WORK" />
          <SideBar link="#contact" title="#contact" style={classes.link} name="CONTACT" />
          <Link href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            className={classes.link}
          >
            <Typography variant="body2">RESUME</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ChangeOnScroll>
  );
}