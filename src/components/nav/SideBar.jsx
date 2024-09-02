import { Link, Typography } from "@material-ui/core";
import { useState } from "react";

export function SideBar({ link, title, style, name }) {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <Link href={link}
      onClick={() => setActiveNav({ title })}
      underline="none"
      className={style}
    >
      <Typography variant="body2">{name}</Typography>
    </Link>
  );
};