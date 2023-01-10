import React from "react";
import { Container, Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import Resume from "../../assets/resume.json";

import profile from "../../assets/profile.png";
import blue from "../../assets/birds/blue.png";
import kereru from "../../assets/birds/kereru.png";
import brown from "../../assets/birds/brown.png";

const useStyles = makeStyles((theme) => ({
  aboutme: {
    minWidth: "100%",
    minHeight: "100vh",
    backgroundColor: "#bbdddf",
    paddingTop: "8%",
    paddingBottom: "8%",
  },
  aboutmewrapper: {
    maxWidth: "70%",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  photo: {
    maxWidth: "35%",
    marginRight: "5%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "70%",
      marginBottom: "3rem",
    },
  },
  intro: {
    maxWidth: "60%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
    },
  },
  skills: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "0",
  },
  artwork: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  cardmedia: {
    height: 150, width: 150, borderRadius: "50%",
    "&:hover": {
      transform: "scale(1.4)",
    },
    [theme.breakpoints.down("md")]: {
      height: 80, width: 80,
    },
  }
}));

const skills = [
  {
    id: 1,
    title: "CLOUD ENGINEERING",
    description: [
      { text: "Infrastructure as Code", id: 1 },
      { text: "Terraform", id: 2 },
      { text: "AWS", id: 3 },
      { text: "Azure", id: 4 },
    ],
  },
  {
    id: 2,
    title: "SOFTWARE DEVELOPMENT",
    description: [
      { text: "React", id: 1 },
      { text: "Python", id: 2 },
      { text: "Node.js", id: 3 },
      { text: "Java", id: 4 },
    ],
  },
];

export const About = () => {
  const classes = useStyles();

  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target="_blank"
      underline="none"
    >
      <Tooltip
        title={socialItem.username}
        placement="left"
        TransitionComponent={Zoom}
      >
        <IconButton
          aria-label={socialItem.network}
        >
          <i className={socialItem.icon}></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return (
    <section id="about">
      <Container className={classes.aboutme}>
        <div className={classes.aboutmewrapper}>
          <div className={classes.photo}>
            <Card
              align="center"
              style={{
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}>
              <Avatar
                alt="profile"
                src={profile}
                style={{ marginTop: "10%", height: "65%", width: "65%", }}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" style={{ fontWeight: 700, }} align="center">{Resume.basics.name}</Typography><br />
                <Typography gutterBottom variant="subtitle1" align="center"><i class="fa fa-suitcase" aria-hidden="true"></i> {Resume.basics.job1} & {Resume.basics.job2}</Typography>
                <Typography gutterBottom variant="subtitle1" align="center"><i class="fa fa-graduation-cap" aria-hidden="true"></i> MSc, BSc, BBA</Typography>
                <Typography gutterBottom variant="subtitle1" align="center"><i class="fa fa-map-pin" aria-hidden="true"></i> {Resume.basics.location.city}, {Resume.basics.location.country}</Typography>
                <Typography gutterBottom align="center">{socialItems}</Typography>
              </CardContent>
            </Card></div>
          <div className={classes.intro}>
            <Typography gutterBottom variant="body1">HELLO! 你好! KIA ORA!</Typography><br />
            <Typography gutterBottom variant="body1">I have over one year of experience in designing, configuing, and maintaining cloud infrastructure defined as code in two large organizations.
              In my short time at these organizations, I've already contributed to over four projects and cleared five cloud related certificates.
              In my previous role, I was a MSc (Computer Science) student and a web developer.</Typography><br />
            <Typography gutterBottom variant="body1">Here are a few technologies I've been working with recently:</Typography>
            <Grid container className={classes.skills} spacing={4}>
              <Grid item xs={4}>
                <Typography gutterBottom variant="body2">
                  <i class="fa fa-cloud" aria-hidden="true"></i> {skills[0].title}
                </Typography>

                {skills[0].description.map((descript) =>
                  <Typography gutterBottom variant="body2">
                    <i class="fa fa-check" aria-hidden="true"></i> {descript.text}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant="body2">
                  <i class="fa fa-code" aria-hidden="true"></i> {skills[1].title}
                </Typography>
                {skills[1].description.map((descript) =>
                  <Typography gutterBottom variant="body2">
                    <i class="fa fa-check" aria-hidden="true"></i> {descript.text}
                  </Typography>
                )}
              </Grid></Grid><br />
            <Typography gutterBottom variant="body1">When not working or coding my next project,
              I love painting in a bunch of different mediums, including arylic, coloured pencil, gouache, and watercolour.
              Currently, I am working on the bird series.</Typography><br />
            <div className={classes.artwork}>
              <Tooltip title="Little Penguin/Kororā" placement="left" TransitionComponent={Zoom}>
                <CardMedia className={classes.cardmedia}
                  image={blue}
                />
              </Tooltip>
              <Tooltip title="New Zealand Pigeon/Kererū" placement="left" TransitionComponent={Zoom}>
                <CardMedia className={classes.cardmedia}
                  image={kereru}
                />
              </Tooltip>
              <Tooltip title="Recessive Red Domestic Pigeon" placement="left" TransitionComponent={Zoom}>
                <CardMedia className={classes.cardmedia}
                  image={brown}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};