import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
    return <footer id = "contact" className={styles.Container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to Contact</p>
        </div>
        <ul className={styles.links}> 
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email"/>
                <a href="mailto:dikshadevelops@gmail.com">dikshadevelops@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkdinIcon.png")} alt="Linkdin"/>
                <a href="https://www.linkedin.com/in/dikshasharma6/">linkdIn.com/Diksha</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github"/>
                <a href="https://github.com/Dikshasharmaa">github.com/Diksha</a>
            </li>
        </ul>
    </footer>
}