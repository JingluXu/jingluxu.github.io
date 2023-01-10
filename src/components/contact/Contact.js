import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";
import { Container, Typography, TextField, Button, Link } from "@material-ui/core";
import Resume from "../../assets/resume.json";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "70%",
    paddingTop: "15%",
    paddingBottom: "15%",
    marginLeft: "15%",
    marginRight: "15%",
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
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    padding: "2em",
    backgroundColor: "#ffffff",
    [theme.breakpoints.down("md")]: {
      marginTop: "1rem",
      maxWidth: "85%",
    },
  },
  message: {
    marginRight: "5%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
      marginTop: "3rem",
    },
  }
}));

export const Contact = () => {
  const classes = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: "#8e8f27",
          title: "You have sent an email!",
          color: "#677c77",
          showConfirmButton: false,
          timer: 1500
        })
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main}>
        <div className={classes.message}><Typography gutterBottom variant="h2">Want to work together?</Typography>
          <Typography gutterBottom variant="body1">Drop me an email at <Link href="mailto:mixlulu@gmail.com" underline="none" style={{ color: "#8e8f27", }}>{Resume.basics.email}</Link> or simply fill out the form and I will reply to you soon.</Typography>
          <Typography gutterBottom variant="body1">Let"s create something beautiful and impactful.</Typography>
        </div>
        <div className={classes.formwrapper}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              required
              id="outlined-name-input"
              label="Name"
              type="text"
              name="name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-password-input"
              label="Email"
              type="email"
              name="email"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-password-input"
              label="Message"
              type="textarea"
              multiline
              minRows={7}
              name="message"
              variant="outlined"
            />
            <Button type="submit" variant="text">
              <Typography variant="subtitle2">Send</Typography>
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
};