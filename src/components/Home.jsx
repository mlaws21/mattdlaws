import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGraduationCap, faFileAlt, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import style from './style/Home.module.css'
import { useTheme } from "../context/ThemeContext";
import blurb from "../Data/blurb";
import newsData from "../Data/news.json";
import pubData from "../Data/pubs.json"
import talkData from "../Data/talks.json"
import teachingData from "../Data/teaching.json"
import headshot from "./images/headshot.JPG";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "talks", label: "Talks" },
  { id: "teaching", label: "Teaching" },
];






const iconMap = {
  GitHub: faGithub,
  LinkedIn: faLinkedin,
  Email: faEnvelope,
  Resume: faFileAlt,
  "Google Scholar": faGraduationCap,

};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
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

  return (
    <div className={style.pageLayout}>
      <aside className={style.sidebar}>
        <button
          type="button"
          className={style.themeToggle}
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
        <div className={style.sidebarContent}>
          <img className={style.profilePhoto} src={headshot} alt="Matt Laws" />
          <a href="/" className={style.siteName}>Matt Laws</a>
          <div className={style.nameDivider} aria-hidden="true" />
          <nav className={style.sectionNav} aria-label="Page sections">
            <ul>
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={style.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {socials.length > 0 && (
            <div className={style.sidebarSocials}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                >
                  <FontAwesomeIcon icon={iconMap[s.name]} size="lg" />
                </a>
              ))}
            </div>
          )}
        </div>
      </aside>

      <main className={style.mainContent}>
        <section id="about" className={style.section}>
            <h1 className={style.sectiontitle}>About</h1>
            <div className={style.about}>{blurb}</div>
        </section>

        <section id="news" className={style.section}>
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
        </section>

        <section id="education" className={style.section}>
            <h1 className={style.sectiontitle}>Education</h1>
            <ul className={style.paperlist}>
                <li className={style.education}>
                    <strong>PhD in Computer Science</strong>, Northeastern University <em>(Current)</em>
                </li>
                <li className={style.education}>
                    <strong>BA in Computer Science</strong>, Williams College (2025)
                </li>
            </ul>
        </section>

        <section id="publications" className={style.section}>
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
        </section>

        <section id="talks" className={style.section}>
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
        </section>

        <section id="teaching" className={style.section}>
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
        </section>
      </main>
    </div>
  );
};

export default Home;
