import style from "./style/About.module.css";
import React from "react";
import blurb from "../Data/blurb";
import me from "./images/headshot.JPG";

function About() {
    return (
        <div className={style.aText}>

            <div className={style.right}>
                <p id={style.blurb}>{blurb}</p>
                {/* <p id={style.resLink}>Here is my <a id={style.resLink} href={"/cv"}>CV</a> | <a id={style.resLink} href={"/resume"}> Resume </a></p> */}
                <p id={style.resLink}>Here is my <a id={style.resLink} href={"/resume"}> Resume </a></p>


            </div>

            <div>
                <img id={style.meImg} src={me}/>

            </div>
            

        </div>
    )
}

export default About;