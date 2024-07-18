import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About =()=>{
    return <section>
        <h2>About</h2>
        <div><img src={getImageUrl("about/aboutImage.png")} alt="Me siting with a laptop"/>
        <ul>
        <li><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/></li>
            <div><h3>Front end developer </h3>
            <p>I'm a front end developer with experience in building responsive and optimized sites</p></div>

            <li><img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/></li>
            <div><h3>Backend developer </h3>
            <p>I have experience in developing fast and optimized and APIs</p></div>

            <li><img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/></li>
            <div><h3>UI designer </h3>
            <p>I have designed multiple landing pages andhave systems as well</p></div>
        </ul>
        </div>
    </section>
};