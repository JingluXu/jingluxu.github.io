import React from "react";
import { Container, Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import Resume from "../../assets/resume.json";

import profile from "../../assets/profile.png";
import blue from "../../assets/birds/blue.png";
import kereru from "../../assets/birds/kereru.png";
import brown from "../../assets/birds/brown.png";
import kokako from "../../assets/birds/kokako.png";

const useStyles = makeStyles((theme) => ({
  aboutme: {
    minWidth: "100vw",
    backgroundColor: "#bbdddf",
    paddingTop: "8%",
    paddingBottom: "8%",
    minHeight: "100vh",
  },
  aboutmewrapper: {
    maxWidth: "74%",
    marginLeft: "13%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      maxWidth: "85%",
    },
  },
  photo: {
    maxWidth: "35%",
    marginRight: "5%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
      marginBottom: "5%",
    },
  },
  avatar: {
    margin: "6%",
    height: "60%",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "30%",
    },
  },
  intro: {
    maxWidth: "60%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
    },
  },
  artwork: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  imgBox: {
    overflow: "hidden",
    borderRadius: "50%",
    margin: "0.3vw",
    "& $img": {
      display: "block",
      height: "8vw",
      objectFit: "contain",
      transition: "all 0.4s ease 0s",
      [theme.breakpoints.down("md")]: {
        height: "15vw",
      },
    },
    "&:hover": {
      "& $img": {
        transform: "scale(2)",
      },
    },
  },
}));

const skills = [
  // {
  //   id: 1,
  //   title: "CLOUD ENGINEERING",
  //   description: [
  //     { text: "Infrastructure as Code", id: 1 },
  //     { text: "Terraform", id: 2 },
  //     { text: "AWS", id: 3 },
  //     { text: "Azure", id: 4 },
  //   ],
  // },
  {
    id: 1,
    description: [
      { text: "RESTful API", id: 2 },
      { text: "AWS", id: 3 },
      { text: "Kafka", id: 4 },
      { text: "Guidewire Cloud Platform", id: 1 }
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
                boxShadow: "none",
                backgroundColor: "#e0efea",
              }}>
              <Avatar
                alt="profile"
                src={profile}
                variant="circular"
                className={classes.avatar}
              />
              <CardContent style={{
                backgroundColor: "#ffffff",
                padding: "5%",
              }}>
                <Typography gutterBottom variant="h4" style={{ fontWeight: 700, }} align="center">{Resume.basics.name}</Typography>
                <Typography gutterBottom variant="subtitle2" align="center"><i class="fa fa-suitcase" aria-hidden="true"></i> {Resume.basics.job}</Typography>
                <Typography gutterBottom variant="subtitle2" align="center"><i class="fa fa-graduation-cap" aria-hidden="true"></i> MSc, BSc, BBA</Typography>
                <Typography gutterBottom variant="subtitle2" align="center"><i class="fa fa-map-pin" aria-hidden="true"></i> {Resume.basics.location.city}, {Resume.basics.location.country}</Typography>
                <Typography gutterBottom align="center">{socialItems}</Typography>
              </CardContent>
            </Card></div>
          <div className={classes.intro}>
            <Typography gutterBottom variant="body1">HELLO! 你好! KIA ORA!</Typography><br />
            <Typography gutterBottom variant="body1">I have over four years of experience in designing, developing, and maintaining software applications in several large organizations.
              Currently, I am working as a Software Engineer at Insurance Australia Group.</Typography><br />
            <Typography gutterBottom variant="body1">Here are a few technologies I've been working with recently:</Typography>
            <Grid container spacing={4}>
              <Grid item md={6}>
                {/* <Typography gutterBottom variant="subtitle2">
                  <i class="fa fa-code" aria-hidden="true"></i> {skills[0].title}
                </Typography> */}
                {skills[0].description.map((descript) =>
                  <Typography gutterBottom variant="subtitle2">
                    <i class="fa fa-code" aria-hidden="true"></i> {descript.text}
                  </Typography>
                )}
              </Grid>
              {/* <Grid item md={6}>
                <Typography gutterBottom variant="subtitle2">
                  <i class="fa fa-cloud" aria-hidden="true"></i> {skills[1].title}
                </Typography>

                {skills[1].description.map((descript) =>
                  <Typography gutterBottom variant="subtitle2">
                    <i class="fa fa-check" aria-hidden="true"></i> {descript.text}
                  </Typography>
                )}
              </Grid> */}
              </Grid><br />
            <Typography gutterBottom variant="body1">When not working or coding my next project,
              I love painting in a bunch of different mediums, including arylic, coloured pencil, gouache, and watercolour.
              My most recent project is the bird series.</Typography>
            <div className={classes.artwork}>
              <Tooltip title="Little Penguin/Kororā" placement="left" TransitionComponent={Zoom}>
                <div className={classes.imgBox}>
                  <img src={blue} alt="penguin" />
                </div>
              </Tooltip>
              <Tooltip title="New Zealand Pigeon/Kererū" placement="left" TransitionComponent={Zoom}>
                <div className={classes.imgBox}>
                  <img src={kereru} alt="kereru" />
                </div>
              </Tooltip>
              <Tooltip title="Recessive Red Domestic Pigeon" placement="left" TransitionComponent={Zoom}>
                <div className={classes.imgBox}>
                  <img src={brown} alt="pigeon" />
                </div>
              </Tooltip>
              <Tooltip title="Kōkako" placement="left" TransitionComponent={Zoom}>
                <div className={classes.imgBox}>
                  <img src={kokako} alt="kokako" />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};