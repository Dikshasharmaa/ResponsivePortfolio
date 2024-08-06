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
            </li>
        </ul>
    </footer>
}