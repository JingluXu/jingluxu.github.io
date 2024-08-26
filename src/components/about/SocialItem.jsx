import { IconButton, Link, Tooltip, Zoom } from "@material-ui/core";

export const SocialItem = ({ item }) => {
    return (
        <Link
            href={item.url}
            key={item.network.toLowerCase()}
            target="_blank"
            underline="none"
        >
            <Tooltip
                title={item.username}
                placement="left"
                TransitionComponent={Zoom}
            >
                <IconButton
                    aria-label={item.network}>
                    <i className={item.icon}></i>
                </IconButton>
            </Tooltip>
        </Link>
    );
}