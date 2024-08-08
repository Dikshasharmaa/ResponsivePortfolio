import React from "react";
import { getImageUrl } from "../../utils";

export const Contact=()=>{
    return <footer>
        <div>
            <h2>Contact</h2>
            <p>Feel Free to Contact</p>
        </div>
        <ul>
            <li>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email"/>
                <a href="mailto:dikshadevelops@gmail.com">dikshadevelops@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("contact/linkdinIcon.png")} alt="Linkdin"/>
                <a href="https://www.linkedin.com/in/dikshasharma6/">linkdIn.com/Diksha</a>
            </li>
            <li>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github"/>
                <a href="https://github.com/Dikshasharmaa">github.com/Diksha</a>
            </li>
        </ul>
    </footer>
}