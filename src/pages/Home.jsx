import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { SideNavbar } from "../components/nav/SideNavbar";
import { Title } from "../components/title/Title";
import { Work } from "../components/work/Work";

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
