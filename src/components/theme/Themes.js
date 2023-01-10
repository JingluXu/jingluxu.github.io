import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

export const Theme =
  createTheme({
    typography: {
      fontSize: 16,
      h1: {
        fontWeight: [700, "!important"],
        color: "#4e7779",
        fontSize: [pxToRem(100), "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(60), "!important"],
        }
      },
      h2: {
        color: "#677C77",
        fontWeight: [700, "!important"],
        fontSize: [pxToRem(70), "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(35), "!important"],
        }
      },
      h3: {
        color: "#4e7779",
        fontWeight: [500, "!important"],
        fontSize: [pxToRem(50), "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(30), "!important"],
        }
      },
      h4: {
        color: "#455442",
        fontSize: [pxToRem(50), "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(25), "!important"],
        }
      },
      h5: {
        color: "#455442",
        fontSize: [pxToRem(22), "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(15), "!important"],
        }
      },
      h6: {
        color: "#455442",
      },
      body1: {

      },
      subtitle1: {
        color: "#677c77",
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(15), "!important"],
        }
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            color: "#33472c",
            backgroundColor: "#e0efea",
          },
        },
      },
      MuiButton: {
        text: {
          backgroundColor: "#8e8f27",
          borderRadius: 3,
          border: 0,
          color: "#ffffff",
          height: "3rem",
          padding: "0 30px",
        },
        root: {
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#677c77",
          },
        },
      },
      MuiIconButton: {
        root: {
          transition: "all 0.5s ease",
          color: "#646109",
          height: "3rem",
          width: "3rem",
          "&:hover": {
            color: "#677c77",
            backgroundColor: "transparent",
          },
        },
      },
      MuiTooltip: {
        root: {
          tooltip: {
            backgroundColor: "#677c77",
            color: "#ffffff",
            fontSize: 12,
          },
        },
      },
      MuiTextField: {
        root: {
          width: "100%",
          backgroundColor: "#f4f4e9",
          marginBottom: "1rem",
          "& label.Mui-focused": {
            color: "#8e8f27",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#f4f4e9",
            },
            "&:hover fieldset": {
              borderColor: "#8e8f27",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8e8f27",
            },
          },
        },
      },
    },
  });