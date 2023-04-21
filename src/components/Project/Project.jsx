import './Project.css';
import ImageDefault from '../../assets/images/programming.jpg';
export default function Project(project) {
  return (
    <article className="project">
      <div className={'project-icon'}>
        <img
          src={project.icon}
          alt={'project icon'}
          className={'project-icon__absolute'}
        />
      </div>
      <a
        href={project.url}
        target={'_blank'}
        className={'project-anchor'}
        rel="noreferrer"
      >
        <img
          src={!project.image ? ImageDefault : project.image}
          alt={project.description}
          className={'project-image'}
          width={305}
          height={171}
          fetchpriority="high"
          decoding="async"
          loading="lazy"
        />
        <div className={'project-about'}>
          <h3 className="project-about__h3">{project.title}</h3>
          <p className="project-about__p">{project.description}</p>
          <div className={'project-languages'}>
            {project.languages.map((language) => (
              <div className="project-languages__div" key={language.name}>
                <img
                  src={language.icon}
                  alt={language.name}
                  className={'project-languages__img'}
                  width="20"
                  height="20"
                  fetchpriority="high"
                  decoding="async"
                  loading="lazy"
                />
                <span className={'language-name'}>{language.name}</span>
              </div>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
