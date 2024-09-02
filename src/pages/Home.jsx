import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SideNavbar } from "../components/nav/SideNavbar";
import { Title } from "../components/title/Title";
import { About } from "./About";
import { Contact } from "./Contact";
import { Work } from "./Work";

const useStyles = makeStyles(() => ({
  page: {
    minHeight: "100vh",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <SideNavbar />
      <div className={classes.page} id="home">
        <Title />
      </div>
      <div id="about">
        <About />
      </div>
      <div className={classes.page} id="work">
        <Work />
      </div>
      <div className={classes.page} id="contact">
        <Contact />
      </div>
      <Typography
        variant="subtitle1"
        align="center"
      >
        Copyright © jingluxu.github.io {new Date().getFullYear()}
      </Typography>
    </>
  );
};
