import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles(() => ({
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

export const Stepper = ({ images, step, next, back }) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <MobileStepper
            variant="dots"
            steps={images.length}
            position="static"
            activeStep={step}
            className={classes.stepper}
            nextButton={
                <Button
                    className={classes.button}
                    onClick={next}
                    disabled={step === images.length - 1}
                >
                    {theme.direction === "rtl" ? (
                        <ArrowBackIosIcon />
                    ) : (
                        <ArrowForwardIosIcon />
                    )}
                </Button>
            }
            backButton={
                <Button className={classes.button} onClick={back} disabled={step === 0}>
                    {theme.direction === "rtl" ? (
                        <ArrowForwardIosIcon />
                    ) : (
                        <ArrowBackIosIcon />
                    )}
                </Button>
            }
        />
    );
}