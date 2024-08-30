import emailjs from "@emailjs/browser";
import { Button, TextField, Typography } from "@material-ui/core";
import { useRef } from "react";
import Swal from "sweetalert2";

export const Email = ({ style }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID, form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    iconColor: "#8e8f27",
                    title: "You have sent an email!",
                    color: "#677c77",
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <TextField
                required
                label="Name"
                type="text"
                name="name"
                variant="outlined"
            />
            <TextField
                required
                label="Email"
                type="email"
                name="email"
                variant="outlined"
            />
            <TextField
                required
                label="Message"
                type="textarea"
                multiline
                maxRows={7}
                minRows={7}
                name="message"
                variant="outlined"
            />
            <Button type="submit" className={style}>
                <Typography variant="body1">Send</Typography>
            </Button>
        </form>
    );
}