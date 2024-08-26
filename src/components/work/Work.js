import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Achievement } from "./Achievement";
import { Stepper } from "./Stepper";

import "./Work.css";

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
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Work = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep1, setActiveStep1] = useState(0);
  const handleNext1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange1 = step => {
    setActiveStep1(step);
  };

  const [activeStep2, setActiveStep2] = useState(0);
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
            <Grid item key={Achievement[0].id}>
              <Typography gutterBottom variant="h3">Software <br /> Development</Typography>
              <Link href={Achievement[0].images[activeStep1].link} target="_blank">
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep1}
                  onChangeIndex={handleStepChange1}
                  enableMouseEvents
                  interval={7000}
                >
                  {Achievement[0].images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep1 - index) <= 2 ? (
                        <div className="container">
                          <img className="contain" src={step.imgPath} alt={step.label} />
                          <div className="overlay">
                            <div className="icon">
                              <i className="fa fa-search"></i>
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
                <Typography gutterBottom variant="h6">{Achievement[0].images[activeStep1].label}</Typography>
                <Typography variant="subtitle1">{Achievement[0].images[activeStep1].details}</Typography>
              </Paper>
              <Stepper images={Achievement[0].images} step={activeStep1} next={handleNext1} back={handleBack1} />
            </Grid>
          </div>

          {/* Cloud */}
          <div className={classes.cardwrapper}>
            <Grid item key={Achievement[1].id}>
              <Typography gutterBottom variant="h3">Cloud <br /> Engineering</Typography>
              <Link href={Achievement[1].images[activeStep2].link} target="_blank">
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep2}
                  onChangeIndex={handleStepChange2}
                  enableMouseEvents
                  interval={7000}
                >
                  {Achievement[1].images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep2 - index) <= 2 ? (
                        <div className="container">
                          <img className="contain" src={step.imgPath} alt={step.label} />
                          <div className="overlay">
                            <div className="icon">
                              <i className="fa fa-search"></i>
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
                <Typography gutterBottom variant="h6">{Achievement[1].images[activeStep2].label}</Typography>
                <Typography variant="subtitle1">{Achievement[1].images[activeStep2].details}</Typography>
              </Paper>
              <Stepper images={Achievement[1].images} step={activeStep2} next={handleNext2} back={handleBack2} />
            </Grid>
          </div>
        </div>
      </Grid>
    </section>
  );
}