import React, { useEffect, useState } from 'react';
import style from "./style/Projects.module.css";

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
        <div className={style.projClose} onClick={this.handleClick}>
          <p className={style.projTitle}>{this.props.title}</p>
          <img className={style.img} src={this.props.image} alt={this.props.title} />
        </div>
      );
    } else {
      return (
        <div>
          <div id={style.else} onClick={this.handleClick}></div>
          <div className={style.projClose}>
            <p className={style.projTitle}>{this.props.title}</p>
            <img className={style.img} src={this.props.image} alt={this.props.title} />
          </div>
          <div className={style.projOpen}>
            <p className={style.bigTitle}>{this.props.exTitle}</p>
            <p id={style.description}>{this.props.description}</p>
            <div id={style.demo}>
              <img id={style.bigImage} src={this.props.bigImage} alt={this.props.exTitle} />
              <a id={style.link} href={this.props.link} target="_blank" rel="noopener noreferrer">
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

  return <div id={style.projects}>{projects.length > 0 ? build() : <p>Loading projects...</p>}</div>;
};

export default Projects