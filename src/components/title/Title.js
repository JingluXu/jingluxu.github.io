import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Resume from "../../assets/resume.json";

const useStyles = makeStyles((theme) => ({
  title: {
    maxWidth: "80%",
    paddingTop: "35vh",
    paddingBottom: "16%",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    minHeight: "100vh",
  },
}));

export const Title = () => {
  const classes = useStyles();

  return (
    <section id="title">
      <Container className={classes.title}>
        <div>
          <Typography display="inline" variant="h4">I'm </Typography>
          <Typography display="inline" gutterBottom variant="h1">{Resume.basics.name}</Typography>
          <Typography display="inline" variant="h4">,</Typography>
          <Typography variant="h4">A {Resume.basics.job1.toLowerCase()} & {Resume.basics.job2.toLowerCase()}.</Typography>
        </div>
      </Container>
    </section>
  );
};