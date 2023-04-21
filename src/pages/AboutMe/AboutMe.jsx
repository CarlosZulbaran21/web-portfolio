import './AboutMe.css';

import Experience from '../../components/Experience/Experience.jsx';
import { skills } from '../../data/skills.js';
import { experiences } from '../../data/experiences.js';

export default function AboutMe() {
  return (
    <section id="about-me" className={'about-container'}>
      <div className="about-me__grid">
        <h2 className="about-me__h2">About Me</h2>
        <article className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.description}>
              <div className="skill__image-container">
                <img
                  src={skill.image}
                  alt={skill.description}
                  className={'skill__img'}
                />
              </div>
              <span className={'skill__span'}>{skill.description}</span>
            </div>
          ))}
        </article>
        <article className={'experience-grid'}>
          {experiences.map((experience) => (
            <Experience {...experience} key={experience.title} />
          ))}
        </article>
      </div>
    </section>
  );
}
