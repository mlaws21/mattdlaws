import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGraduationCap, faFileAlt, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import style from './style/Home.module.css'
import blurb from "../Data/blurb";
import newsData from "../Data/news.json";
import pubData from "../Data/pubs.json"
import talkData from "../Data/talks.json"
import teachingData from "../Data/teaching.json"






const iconMap = {
  GitHub: faGithub,
  LinkedIn: faLinkedin,
  Email: faEnvelope,
  Resume: faFileAlt,
  "Google Scholar": faGraduationCap,

};

const Socials = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/socials.json");
        const json = await res.json();
        setSocials(json);
      } catch (err) {
        console.error("Error loading socials:", err);
      }
    };
    fetchData();
  }, []);

  if (!socials.length) {
    return <p>Loading socials...</p>;
  }

  return (
    <div className={style.home}>
        <div className={style.section}>
        {socials.map((s, i) => (
            <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            >
            <FontAwesomeIcon icon={iconMap[s.name]} size="2x" className="social-icon" />
            </a>
        ))}
        </div>

        <div className={style.section}>
            <h1 className={style.sectiontitle}>About</h1>
            <div className={style.about}>{blurb}</div>
        </div>


        <div className={style.section}>
            <h1 className={style.sectiontitle}>News</h1>

            <div className={style.scrollbox} role="list">
                {newsData.map((n, i) => (
                <article key={i} className={style.item} role="listitem">
                    <div className={style.meta}>
                        {n.date}
                    </div>

                    {n.link ? (
                    <a
                        href={n.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.title}
                    >
                        {n.title}
                    </a>
                    ) : (
                    <div className={style.title}>{n.title}</div>
                    )}
                </article>
                ))}
            </div>
        </div>

        <div className={style.section}>
            <h1 className={style.sectiontitle}>Education</h1>
            <ul className={style.paperlist}>
                <li>
                    <strong>PhD in Computer Science</strong>, Northeastern University <em>(Current)</em>
                </li>
                <li>
                    <strong>BA in Computer Science</strong>, Williams College (2025)
                </li>
            </ul>
        </div>

        <div className={style.section}>
            <h1 className={style.sectiontitle}>Publications</h1>
            <ul className={style.paperlist}>
                {pubData.map((p, i) => (
                    <li key={i} className={style.litem}>
                    <a
                        href={p.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.papertitle}
                    >
                        {p.title}
                    </a>

                    <div className={style.meta}>
                    <span className={style.authors}>
                        {p.authors.map((author, idx) => (
                            <span
                            key={idx}
                            className={author === "Matthew D. Laws" ? style.underline : ""}
                            >
                            {author}
                            {idx < p.authors.length - 1 && ", "}
                            </span>
                        ))}
                        </span>
                        {" • "}
                        <span className={style.conference}>{p.conference}</span>
                        {" • "}
                        <span className={style.when}>{p.when}</span>
                    </div>
                    </li>
                ))}
            </ul>
        </div>


        <div className={style.section}>
            <h1 className={style.sectiontitle}>Talks</h1>
            <ul className={style.paperlist}>
                {talkData.map((p, i) => (
                    <li key={i} className={style.litem}>
                    <a
                        href={p.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.papertitle}
                    >
                        {p.title}
                    </a>

                    <div className={style.meta}>
                        <span className={style.conference}>{p.conference}</span>
                        {" • "}
                        <span className={style.when}>{p.when}</span>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className={style.section}>
            <h1 className={style.sectiontitle}>Teaching</h1>
            <ul className={style.paperlist}>
                {teachingData.map((p, i) => (
                    <li key={i} className={style.litem}>
                        {p.title}

                    <div className={style.meta}>
                        <span className={style.when}>{p.where}</span>
                        {" • "}
                        <span className={style.conference}>{p.position}</span>
                        {" • "}
                        <span className={style.when}>{p.when}</span>
                    </div>
                    </li>
                ))}
            </ul>
        </div>





    </div>
  );
};

export default Socials;
