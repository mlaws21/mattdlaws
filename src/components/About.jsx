import "./style/About.css";
import React from "react";
import blurb from "../Data/blurb";
import me from "./images/headshot.JPG";

function About() {
    return (
        <div className="aText">

            <div className="right">
                <p id="blurb">{blurb}</p>
                <p id="resLink">Here is my <a id="resLink" href={"/cv"}>CV</a> | <a id="resLink" href={"/resume"}> Resume </a></p>

            </div>

            <div>
                <img id="meImg" alt="author's face" src={me}/>

            </div>
            

        </div>
    )
}

export default About;