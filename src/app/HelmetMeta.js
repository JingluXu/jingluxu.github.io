import React from "react";
import Helmet from "react-helmet";
import Resume from "../assets/resume.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <title>{Resume.basics.name} | {Resume.basics.location.city}, {Resume.basics.location.country}</title>
            <meta name="author" content={Resume.basics.name} />
        </Helmet>
    );
};
