import { Typography } from "@material-ui/core";
import { Skill } from "./Skill";

export function Summary() {
    return (
        <>
            <Typography gutterBottom variant="body1">HELLO! 你好! KIA ORA!</Typography><br />
            <Typography gutterBottom variant="body1">I have 4+ years of experience designing, developing, and maintaining 
                software applications in several large organizations.
                Currently, I am working as a Software Engineer at Insurance Australia Group.</Typography><br />
            <Typography gutterBottom variant="body1">Here are a few technologies I've been working with recently:</Typography>
            <Skill />
            <Typography gutterBottom variant="body1">When not working or coding my next project,
                I love painting in a bunch of different mediums, including arylic, coloured pencil, gouache, and watercolour.
                My most recent project is the bird series.</Typography>
        </>
    );
};