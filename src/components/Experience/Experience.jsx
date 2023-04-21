/* eslint-disable react/prop-types */
import './Experience.css';

export default function Experience({
  title,
  date,
  description,
  companyName,
  companyLink,
  isCurrent,
  technologies,
} = {}) {
  return (
    <div className={'experience-list'}>
      <span className={'experience__span'}>
        <svg
          aria-hidden="true"
          className="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1zm0 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <div className={'experience-title__container'}>
        <div>
          <h3 className={'experience-title'}>
            {title}
            {isCurrent && (
              <span className={'experience-current'}>{'Current'}</span>
            )}
          </h3>
          <span className={'experience-date'}>{date}</span>
        </div>
        <a
          href={companyLink}
          target={'_blank'}
          rel="noreferrer"
          className={'experience-company'}
        >
          {companyName}
        </a>
      </div>
      <p className={'experience-description'}>
        {description}
        <span>
          {technologies.map((technology) => (
            <strong key={technology}>{technology}</strong>
          ))}
        </span>
      </p>
    </div>
  );
}
