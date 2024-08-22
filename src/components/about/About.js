import React from "react";
import { Container, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import Resume from "../../assets/resume.json";
import { Summary } from "./Summary";
import { Artwork } from "./Artwork";

import profile from "../../assets/profile.png";

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
}));

// const skills = [
//   // {
//   //   id: 1,
//   //   title: "CLOUD ENGINEERING",
//   //   description: [
//   //     { text: "Infrastructure as Code", id: 1 },
//   //     { text: "Terraform", id: 2 },
//   //     { text: "AWS", id: 3 },
//   //     { text: "Azure", id: 4 },
//   //   ],
//   // },
//   {
//     id: 1,
//     description: [
//       { text: "RESTful API", id: 2 },
//       { text: "AWS", id: 3 },
//       { text: "Kafka", id: 4 },
//       { text: "Guidewire Cloud Platform", id: 1 }
//     ],
//   },
// ];

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
            <Summary />
            <div className={classes.artwork}>
              <Artwork />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};