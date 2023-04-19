import './ShortDescription.css';
import LinkedinLogo from '../../assets/svg/SvgLinkedin';
import GitHubLogo from '../../assets/svg/SvgGitHub';

import { programmingLanguages } from '../../data/ProgrammingLanguages';
import ProgrammingLanguage from '../ProgrammingLanguage/ProgrammingLanguage.jsx';

export default function ShortDescription() {
  return (
    <article className="description-container">
      <h2 className="description-container__h2">My name</h2>
      <h1 className="description-container__h1">
        is <strong className="description-container__h1__strong">Carlos</strong>
      </h1>
      <p className="description-container__p">
        Passionate about coding, always seeking to learn and with extensive
        experience.
      </p>
      <div className="contact-info">
        <a className="button-contact" href="#">
          Contact Me
        </a>
        <div className="social-container">
          <a className="social-container__a" href="#">
            <LinkedinLogo />
          </a>
          <a href="#">
            {' '}
            <GitHubLogo />
          </a>
        </div>
      </div>
      <div className="languages">
        {programmingLanguages.map((programmingLanguage, index) => (
          <ProgrammingLanguage {...programmingLanguage} key={index} />
        ))}
      </div>
    </article>
  );
}
