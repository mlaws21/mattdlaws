import React from 'react';

import "./style/Projects.css";
import data from '../Data/projects.jsx';
import i1 from './images/wrfc.png';
import i2 from './images/minigolf.png';
import bi1 from './images/wrfcPage.png';
import bi2 from './images/minigolf.png';
const images = [i1, i2]
const bigImages = [bi1, bi2]



class ProjContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({status: !this.state.status});
    }


    render() {
        if (this.state.status) {
            return (
                <div className="projClose" onClick={this.handleClick}>
                    <p className="projTitle">{this.props.title}</p>
                    <img className="img" src={this.props.image} />

                </div>
                
            )
        } else {
            return (
                <div>
                    <div id="else" onClick={this.handleClick}></div>
                    <div className="projClose">
                        <p className="projTitle">{this.props.title}</p>
                        <img className="img" src={this.props.image} />


                    </div>
                    
                    <div className="projOpen">
                        {/* <p id="close">x</p> */}
                        <p className="bigTitle">{this.props.exTitle}</p>
                        <p id="description">{this.props.description}</p>
                        <div id="demo">
                            <img id="bigImage" src={this.props.bigImage} /> 
                            <a id="link"href={this.props.link} target="_blank">{this.props.linkDescription}</a>

                        </div>
                        



                    </div>
                    
                </div>
                
            )
        }

    }

}

function build() {
    var all = [];
    for (var i = 0; i < data.length; i++) {
        all.push(<ProjContainer 
            title={data[i][0]} 
            exTitle={data[i][1]} 
            image={images[i]} 
            bigImage={bigImages[i]} 
            description={data[i][2]} 
            link={data[i][3]}
            linkDescription={data[i][4]}
             />)
    }
    return (all);
}

function Projects() {

    return (
        <div id="projects">
            {build()}
        </div>
    )
}

export default Projects;