import style from "./style/Contact.module.css";
import gmail from './images/gmail.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import React from "react";



class Handle extends React.Component {

    render() {
        return (
            <div id={style.com}>
                <img className={style.logoImg} src={this.props.image} alt="logo" />
                <p className={style.cText} id={style.cLink}>{this.props.site}: {this.props.link}</p>
            </div>
        )
    }
}

function Contact() {
    return (
        <div>
            <p className={style.cText} id={style.cTitle}>Find me at:</p>
            <Handle image={gmail} site="Email" link="laws.ma@northeastern.edu"/>
            <Handle image={linkedin} site="Linkedin" link="linkedin.com/in/matt-d-laws/"/>
            <Handle image={github} site="Github" link="github.com/mlaws21/"/>


        </div>
    )
}

export default Contact;