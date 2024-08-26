import { Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import blue from "../../assets/birds/blue.png";
import brown from "../../assets/birds/brown.png";
import kereru from "../../assets/birds/kereru.png";
import kokako from "../../assets/birds/kokako.png";

const useStyles = makeStyles((theme) => ({
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



export const Artwork = () => {
    
    const classes = useStyles();

    function Work({ title, image, bird }) {
        return (
            <Tooltip title={title} placement="left" TransitionComponent={Zoom}>
                <div className={classes.imgBox}>
                    <img src={image} alt={bird} />
                </div>
            </Tooltip>
        );
    };

    return (
        <>
            <Work title="Little Penguin/Kororā" image={blue} bird="penguin" />
            <Work title="New Zealand Pigeon/Kererū" image={kereru} bird="kereru" />
            <Work title="Recessive Red Domestic Pigeon" image={brown} bird="pigeon" />
            <Work title="Kōkako" image={kokako} bird="Kōkako" />
        </>
    );
}