import './Projects.css';

import { Fragment } from 'react';
import { projects } from '../../data/projects';
import Project from '../../components/Project/Project.jsx';

export default function Projects() {
  return (
    <section id={'projects'} className={'projects-container'}>
      <div className="projects-grid">
        <h2 className={'projects-container__h2'}>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <Fragment key={project.title}>
              <Project {...project} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
