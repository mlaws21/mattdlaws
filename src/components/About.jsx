import "./style/About.css";
import React from "react";
import blurb from "../Data/blurb";
import me from "./images/headshot.JPG";

function About() {
    return (
        <div className="aText">
            <div>
                <img id="meImg" src={me}/>

            </div>
            <div className="right">
                <p id="blurb">{blurb}</p>
                <a id="resLink" href={"/resume"}>Here is my Resume </a>
            </div>
            

        </div>
    )
}

export default About;