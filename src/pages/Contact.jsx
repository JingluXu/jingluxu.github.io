import { Container, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../assets/resume.json";
import { Email } from "../components/contact/Email";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "74%",
    marginLeft: "13%",
    paddingTop: "15%",
    paddingBottom: "15%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  formwrapper: {
    display: "flex",
    flex: "column",
    borderRadius: "16px",
    boxShadow: "none",
    padding: "2em",
    backgroundColor: "#ffffff",
    maxWidth: "45%",
    [theme.breakpoints.down("md")]: {
      marginTop: "3%",
      maxWidth: "100%",
    },
  },
  message: {
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
      marginRight: "0%",
      maxWidth: "100%",
    },
  },
  button: {
    color: "#ffffff",
    backgroundColor: "#8e8f27",
    textTransform: "none",
    padding: "0.5rem 1rem",
    "&:hover": {
      backgroundColor: "#677c77",
      transition: "all 0.4s ease 0s",
    },
  },
  link: {
    textDecoration: "none",
    color: "#8e8f27",
    "&:hover": {
      textDecoration: "underline",
      transition: "all 0.4s ease 0s",
    },
  },
}));

export const Contact = () => {

  const classes = useStyles();

  return (
    <section id="contact">
      <Container component="main" className={classes.main}>
        <div className={classes.message}><Typography gutterBottom variant="h2">Want to work together?</Typography>
          <Typography gutterBottom variant="body1">Drop me an email at <Link className={classes.link} href="mailto:mixlulu@gmail.com">{Resume.basics.email}
          </Link> or simply fill out the form and I will reply to you soon.</Typography>
          <Typography gutterBottom variant="body1">Let's create something beautiful and impactful.</Typography>
        </div>
        <div className={classes.formwrapper}>
          <Email style={classes.button} />
        </div>
      </Container>
    </section>
  )
};