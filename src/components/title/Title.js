import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Resume from "../../assets/resume.json";

const useStyles = makeStyles((theme) => ({
  title: {
    maxWidth: "70%",
    paddingTop: '16%',
    paddingBottom: '16%',
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    minHeight: '100vh',
  },
}));

export const Title = () => {
  const classes = useStyles();

  return (
    <section id="title">
      <Container className={classes.title} maxWidth="md">
        <div>
          <Typography display="inline" variant="h4" style={{ fontSize: '3rem', }}>I'm </Typography>
          <Typography display="inline" gutterBottom variant="h1" style={{ fontSize: '8rem', fontWeight: 700, }}>{Resume.basics.name}</Typography>
          <Typography display="inline" variant="h4" style={{ fontSize: '3rem', }}>,</Typography>
          <Typography variant="h4" style={{ fontSize: '3rem', }}>A {Resume.basics.job1.toLowerCase()} & {Resume.basics.job2.toLowerCase()}.</Typography>
        </div>
      </Container>
    </section>
  );
};