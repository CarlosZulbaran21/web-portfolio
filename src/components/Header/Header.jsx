import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a
          className="header__logo"
          href="https://www.linkedin.com/in/carlos-daniel-zulbaran-sarmiento-40a5a2198/"
          target={'_blank'}
          rel="noreferrer"
        >
          {'< Dzulbaran />'}
        </a>
        <a className="header__desktop" href="#home">
          {'Home'}
        </a>
        <a className="header__desktop" href="#projects">
          {'Portfolio'}
        </a>
        <a className="header__desktop" href="#about-me">
          {'About Me'}
        </a>
        <a className="header__link" href="#contact">
          Contact me
        </a>
      </nav>
    </header>
  );
}
