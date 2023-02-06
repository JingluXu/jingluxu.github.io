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
        fontSize: [pxToRem(110), "!important"],
        fontFamily: ["'Arial Narrow', Arial, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(60), "!important"],
        }
      },
      h2: {
        color: "#677C77",
        fontWeight: [700, "!important"],
        fontSize: [pxToRem(70), "!important"],
        fontFamily: ["'Arial Narrow', Arial, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(40), "!important"],
        }
      },
      h3: {
        color: "#4e7779",
        fontWeight: [500, "!important"],
        fontSize: [pxToRem(40), "!important"],
        fontFamily: ["'Arial Narrow', Arial, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(30), "!important"],
        }
      },
      h4: {
        color: "#455442",
        fontSize: [pxToRem(50), "!important"],
        fontFamily: ["'Arial Narrow', Arial, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(25), "!important"],
        }
      },
      h6: {
        color: "#455442",
        fontFamily: ["'Arial Narrow', Arial, sans-serif", "!important"],
      },
      body1: {
        fontSize: [pxToRem(16), "!important"],
        fontFamily: ["Arial, Helvetica, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(12), "!important"],
        }
      },
      body2: {
        fontSize: [pxToRem(14), "!important"],
        fontFamily: ["'Arial Narrow', Arial, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(12), "!important"],
        }
      },
      subtitle1: {
        color: "#677c77",
        fontFamily: ["Arial, Helvetica, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(15), "!important"],
        }
      },
      subtitle2: {
        color: "#677c77",
        fontFamily: ["Arial, Helvetica, sans-serif", "!important"],
        [breakpoints.down("md")]: {
          fontSize: [pxToRem(12), "!important"],
        }
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            color: "#455442",
            backgroundColor: "#e0efea",
          },
        },
      },
      MuiToolbar: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "40vh",
          marginTop: "30vh",
          marginBottom: "30vh",
          [breakpoints.down("md")]: {
            flexDirection: "row",
            marginTop: 0,
          }
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
            transition: "all 0.4s ease 0s",
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
              transition: "all 0.4s ease 0s",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8e8f27",
            },
          },
        },
      },
    },
  });