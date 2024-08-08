import React, { useEffect, useState } from 'react';
import "./style/Projects.css";

class ProjContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ status: !this.state.status });
  }

  render() {
    if (this.state.status) {
      return (
        <div className="projClose" onClick={this.handleClick}>
          <p className="projTitle">{this.props.title}</p>
          <img className="img" src={this.props.image} alt={this.props.title} />
        </div>
      );
    } else {
      return (
        <div>
          <div id="else" onClick={this.handleClick}></div>
          <div className="projClose">
            <p className="projTitle">{this.props.title}</p>
            <img className="img" src={this.props.image} alt={this.props.title} />
          </div>
          <div className="projOpen">
            <p className="bigTitle">{this.props.exTitle}</p>
            <p id="description">{this.props.description}</p>
            <div id="demo">
              <img id="bigImage" src={this.props.bigImage} alt={this.props.exTitle} />
              <a id="link" href={this.props.link} target="_blank" rel="noopener noreferrer">
                {this.props.linkDescription}
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = "./projData.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // const {results} = json;
        // Only put the results in state, ie, the actual users array
        setProjects(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  const build = () => {
    return projects.map((project, index) => (
      <ProjContainer
        key={index}
        title={project.title}
        exTitle={project.bigTitle}
        description={project.description}
        link={project.link}
        linkDescription={project.linkText}
        image={project.image}
        bigImage={project.bigImage}
      />
    ));
  };

  return <div id="projects">{projects.length > 0 ? build() : <p>Loading projects...</p>}</div>;
};

export default Projects