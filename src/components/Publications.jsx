import React, { useEffect, useState } from "react";
import "./style/publications.module.css"

const Papers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch("./pubData.json")
      .then((res) => res.json())
      .then((data) => setPapers(data))
      .catch((err) => console.error("Error loading publications:", err));
  }, []);

  if (!papers.length) {
    return <p className="white">Loading publications...</p>;
  }

  return (
    <div className="white">
      {papers.map((paper, i) => (
        <React.Fragment key={i}>
          <p className="bold"> "{paper.title}"</p>
          <p>
            {paper.authors.map((author, idx) => (
              <React.Fragment key={idx}>
                {author === "Matthew D. Laws" ? <b><u>{author}</u></b> : author}
                {idx < paper.authors.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
          <p>
            {paper.conference}, {paper.when}{" "}
            <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
              [PDF]
            </a>
          </p>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Papers;
