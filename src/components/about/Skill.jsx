import { Grid, Typography } from "@material-ui/core";

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
            { text: "RESTful API", id: 1 },
            { text: "Java", id: 2 },
            { text: "AWS", id: 3 },
            { text: "Kafka", id: 4 },
            { text: "React", id: 5 },
        ],
    },
];

export const Skill = () => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item md={6}>
                    {/* <Typography gutterBottom variant="subtitle2">
                  <i className="fa fa-code" aria-hidden="true"></i> {skills[0].title}
                </Typography> */}
                    {skills[0].description.map((descript) =>
                        <Typography key={descript.id} gutterBottom variant="subtitle2">
                            <i className="fa fa-code" aria-hidden="true"></i> {descript.text}
                        </Typography>
                    )}
                </Grid>
                {/* <Grid item md={6}>
                <Typography gutterBottom variant="subtitle2">
                  <i className="fa fa-cloud" aria-hidden="true"></i> {skills[1].title}
                </Typography>

                {skills[1].description.map((descript) =>
                  <Typography key={descript.id} gutterBottom variant="subtitle2">
                    <i className="fa fa-check" aria-hidden="true"></i> {descript.text}
                  </Typography>
                )}
              </Grid> */}
            </Grid><br />
        </>
    );
}