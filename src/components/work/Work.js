import React from "react";
import { Link, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import "./Work.css";

import saa from "../../assets/certificates/saa.png";
import az900 from "../../assets/certificates/az900.png";
import dp900 from "../../assets/certificates/dp900.png";
import sc900 from "../../assets/certificates/sc900.png";
import terraform002 from "../../assets/certificates/terraform002.png";
import automarker from "../../assets/automarker.png";
import icp from "../../assets/certificates/icp.png";
import gardenfriends from "../../assets/gardenfriends.png";

const useStyles = makeStyles((theme) => ({
  main: {
    minWidth: "100vw",
    backgroundColor: "#90c7ca",
  },
  workwrapper: {
    maxWidth: "74%",
    marginLeft: "13%",
    paddingTop: "7%",
    paddingBottom: "7%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      maxWidth: "85%",
    },
  },
  cardwrapper: {
    maxWidth: "48%",
    borderRadius: "16px",
    boxShadow: "none",
    padding: "2em",
    backgroundColor: "#ffffff",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
      marginTop: "1%",
      marginBottom: "1%",
    },
  },
  paper: {
    height: "calc(355px - 11vw)",
    [theme.breakpoints.down("md")]: {
      height: "calc(405px - 25vw)",
    },
  },
  stepper: {
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "#4e7779"
    },
  },
  button: {
    color: "#4e7779",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#8e8f27",
      transition: "all 0.4s ease 0s",
    },
  },
}));

const work = [
  {
    id: 1,
    title: "Software Development",
    images: [
      {
        label: "Automarker System for The University of Auckland",
        details: "Enhanced an automarking system used in several algorithms courses at the university. Fixed several previous bugs and added new dynamic features to provide a great user experience (e.g., let users control the table\"s sorting order). The system was built on LAMP + Java stack.",
        imgPath: automarker,
        link: "http://www.cs.auckland.ac.nz/automated-marker",
      },
      {
        label: "Birdwatching Website",
        details: "Coming soon...",
        imgPath: gardenfriends,
        // link: "",
      },
      {
        label: "ICAgile Certified Professional",
        details: "Working knowledge of the agile mindset, values, principles, and foundational concepts. Hands on experience in Jira and Kanban.",
        imgPath: icp,
        link: "https://www.credly.com/badges/3e6a23d5-f0c5-47d1-a1c3-3884acd6eb84/",
      },
    ],
  },
  {
    id: 2,
    title: "Cloud Engineering",
    images: [
      {
        label: "AWS Certified Solutions Architect (Associate)",
        details: "A strong understanding of the AWS Well-Architected Framework, AWS networking, security services, and the AWS global infrastructure. Expertise in AWS compute, networking, storage, and database services as well as deployment and management services.",
        imgPath: saa,
        link: "https://www.credly.com/badges/4f9b39d2-78a4-48b9-9a3f-cecb0678d17c/",
      },
      {
        label: "Microsoft Certified: Azure Fundamentals",
        details: "Strong knowledge of Azure's compute, networking, and storage services as well as its security, privacy, pricing, and support. Hands on experience in Azure development.",
        imgPath: az900,
        link: "https://www.credly.com/badges/92eec56c-af1c-43fb-9272-882c7a9d8501/",
      },
      {
        label: "Microsoft Certified: Azure Data Fundamentals",
        details: "Proven ability to identify considerations for Azure database services including relational and non-relational databases. Understand the usage of different data warehouses, data lakes and transformation tools.",
        imgPath: dp900,
        link: "https://www.credly.com/badges/d56b6efb-5c7f-4244-8395-ea9a7805788d/",
      },
      {
        label: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
        details: "A solid understanding of security, compliance, and identity across cloud-based and related Microsoft services. Worked on Azure AD and other Microsoft security and compliance solutions. Experience in deploying cloud infrastructure based on security best practices.",
        imgPath: sc900,
        link: "https://www.credly.com/badges/43507edb-7b1a-4559-916e-16250076aad2/",
      },
      {
        label: "HashiCorp Certified: Terraform Associate",
        details: "Strong and proven skills associated with Terraform such as modules, workflow, and state. Expertise in using Terraform Cloud and other automation tools to implement infrastructure as code in production.",
        imgPath: terraform002,
        link: "https://www.credly.com/badges/17a86e01-fb25-471d-b729-b41cc5063301/",
      },
    ]
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Work = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep1, setActiveStep1] = React.useState(0);
  const handleNext1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange1 = step => {
    setActiveStep1(step);
  };

  const [activeStep2, setActiveStep2] = React.useState(0);
  const handleNext2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange2 = step => {
    setActiveStep2(step);
  };

  return (
    <section id="work">

      <Grid container className={classes.main}>
        <div className={classes.workwrapper}>
          {/* Software */}
          <div className={classes.cardwrapper}>
            <Grid item key={work[0].id}>
              <Typography gutterBottom variant="h3">Software <br /> Development</Typography>
              <Link href={work[0].images[activeStep1].link} target="_blank">
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep1}
                  onChangeIndex={handleStepChange1}
                  enableMouseEvents
                  interval="7000"
                >
                  {work[0].images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep1 - index) <= 2 ? (
                        <div class="container">
                          <img class="contain" src={step.imgPath} alt={step.label} />
                          <div class="overlay">
                            <div class="icon">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
              </Link>
              <Paper
                elevation={0}
                className={classes.paper}
              >
                <Typography gutterBottom variant="h6">{work[0].images[activeStep1].label}</Typography>
                <Typography variant="subtitle1">{work[0].images[activeStep1].details}</Typography>
              </Paper>
              <MobileStepper
                variant="dots"
                steps={work[0].images.length}
                position="static"
                activeStep={activeStep1}
                className={classes.stepper}
                nextButton={
                  <Button
                    className={classes.button}
                    onClick={handleNext1}
                    disabled={activeStep1 === work[0].images.length - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <ArrowBackIosIcon />
                    ) : (
                      <ArrowForwardIosIcon />
                    )}
                  </Button>
                }
                backButton={
                  <Button className={classes.button} onClick={handleBack1} disabled={activeStep1 === 0}>
                    {theme.direction === "rtl" ? (
                      <ArrowForwardIosIcon />
                    ) : (
                      <ArrowBackIosIcon />
                    )}
                  </Button>
                }
              />
            </Grid>
          </div>

          {/* Cloud */}
          <div className={classes.cardwrapper}>
            <Grid item key={work[1].id}>
              <Typography gutterBottom variant="h3">Cloud <br /> Engineering</Typography>
              <Link href={work[1].images[activeStep2].link} target="_blank">
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep2}
                  onChangeIndex={handleStepChange2}
                  enableMouseEvents
                  interval="7000"
                >
                  {work[1].images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep2 - index) <= 2 ? (
                        <div class="container">
                          <img class="contain" src={step.imgPath} alt={step.label} />
                          <div class="overlay">
                            <div class="icon">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
              </Link>
              <Paper
                elevation={0}
                className={classes.paper}
              >
                <Typography gutterBottom variant="h6">{work[1].images[activeStep2].label}</Typography>
                <Typography variant="subtitle1">{work[1].images[activeStep2].details}</Typography>
              </Paper>
              <MobileStepper
                variant="dots"
                steps={work[1].images.length}
                position="static"
                activeStep={activeStep2}
                className={classes.stepper}
                nextButton={
                  <Button
                    className={classes.button}
                    onClick={handleNext2}
                    disabled={activeStep2 === work[1].images.length - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <ArrowBackIosIcon />
                    ) : (
                      <ArrowForwardIosIcon />
                    )}
                  </Button>
                }
                backButton={
                  <Button className={classes.button} onClick={handleBack2} disabled={activeStep2 === 0}>
                    {theme.direction === "rtl" ? (
                      <ArrowForwardIosIcon />
                    ) : (
                      <ArrowBackIosIcon />
                    )}
                  </Button>
                }
              />
            </Grid>
          </div>
        </div>
      </Grid>
    </section>
  );
};