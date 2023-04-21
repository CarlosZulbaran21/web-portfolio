import './Contact.css';
import LinkedinLogo from '../../assets/svg/SvgLinkedin';
import GitHubLogo from '../../assets/svg/SvgGitHub';

export default function Contact() {
  return (
    <section id={'contact'} className="contact-container">
      <div className={'content__title'}>
        <h2 className={'contact__h2'}>Contact Me</h2>
        <footer>
          <div className="social-media-container">
            <a
              href={
                'https://www.linkedin.com/in/carlos-daniel-zulbaran-sarmiento-40a5a2198/'
              }
              target={'_blank'}
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href={'mailto:cadazusa@hotmail.com'}
              target={'_blank'}
              rel="noreferrer"
            >
              Mail
            </a>
            <a
              href={'https://github.com/carloszulbaran21'}
              target={'_blank'}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={
                'https://docs.google.com/document/d/13XnNLB9TJVMY7NG-uTfHVo9K1n-xPfKl/edit?usp=sharing&ouid=110302450081421354202&rtpof=true&sd=true'
              }
              target={'_blank'}
              rel="noreferrer"
            >
              Curriculum
            </a>
          </div>
          <div className={'social-flex'}>
            <span>{new Date().getFullYear()}, Built with ReactJs v18.2.0</span>
            <div className="social-container">
              <a
                className="social-container__a"
                href="https://www.linkedin.com/in/carlos-daniel-zulbaran-sarmiento-40a5a2198/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo />
              </a>
              <a
                href="https://github.com/carloszulbaran21"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubLogo />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
