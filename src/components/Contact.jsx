import "./style/Contact.css";
import gmail from './images/gmail.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';



import React from "react";
import { useNavigate } from "react-router-dom";


class Handle extends React.Component {

    render() {
        return (
            <div id="com">
                <img className="logoImg" src={this.props.image} alt="logo" />
                <p className="cLink">{this.props.site}: {this.props.link}</p>
            </div>
        )
    }
}

function Contact() {
    return (
        <div>
            <p id="cTitle">Find me at:</p>
            <Handle image={gmail} site="Email" link="mdl4@williams.edu"/>
            <Handle image={linkedin} site="Linkedin" link="linkedin.com/in/matt-d-laws/"/>
            <Handle image={github} site="Github" link="github.com/mlaws21"/>


        </div>
    )
}

export default Contact;