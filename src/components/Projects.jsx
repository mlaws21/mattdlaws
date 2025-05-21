import React, { useEffect, useState, createRef } from 'react';
import "./style/Projects.css";

class ProjContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: true };  // true = closed, false = open
    this.wrapperRef = createRef();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOutside(e) {
    if (
      !this.state.status &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(e.target)
    ) {
      this.setState({ status: true });
    }
  }

  handleKeyDown(e) {
    if (!this.state.status && e.key === 'Escape') {
      this.setState({ status: true });
    }
  }

  handleToggle() {
    this.setState(s => ({ status: !s.status }));
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="projWrapper">
        {/* always show the header as a keyboard-accessible button */}
        <div
          className="projClose"
          onClick={this.handleToggle}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.handleToggle();
            }
          }}
        >
          <p className="projTitle">{this.props.title}</p>
          <img className="img" src={this.props.image} alt={this.props.title} />
        </div>

        {/* only render expanded content when open */}
        {!this.state.status && (
          <div className="projOpen">
            {/* Close “×” button */}
            <button
              className="closeButton"
              onClick={this.handleToggle}
              aria-label="Close"
            >
              &times;
            </button>

            <p className="bigTitle">{this.props.exTitle}</p>
            <p id="description">{this.props.description}</p>
            <div id="demo">
              <img
                id="bigImage"
                src={this.props.bigImage}
                alt={this.props.exTitle}
              />
              <a
                id="link"
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.linkDescription}
              </a>
            </div>
          </div>
        )}
      </div>
    );
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
        setProjects(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="projects">
      {projects.length > 0 ? (
        projects.map((project, index) => (
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
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
  );
};

export default Projects;
