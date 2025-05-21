import "./style/Contact.css";
import gmail from './images/gmail.png';
import medium from './images/medium.png';
import github from './images/github.png';



import React from "react";
import { useNavigate } from "react-router-dom";


class Handle extends React.Component {

    render() {
        return (
            <div id="com">
                <img className="logoImg" src={this.props.image} alt={this.props.site} />
                <p className="cText" id="cLink">
                    {this.props.site}: <a style={{ textDecoration: 'none', color: 'inherit' }}href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link}</a>
                </p>


                
            </div>
        )
    }
}

function Contact() {
    return (
        <div>
            <p className="cText" id="cTitle">Find me at:</p>
            <Handle image={gmail} site="Email" link="https://mdl4@williams.edu"/>
            <Handle image={medium} site="Medium" link="https://medium.com/@mdl4"/>
            <Handle image={github} site="Github" link="https://github.com/mlaws21/"/>


        </div>
    )
}

export default Contact;