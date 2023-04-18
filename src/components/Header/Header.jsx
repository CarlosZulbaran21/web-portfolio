import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__logo" href="#">
          {'< Dzulbaran />'}
        </a>
        <a className="header__link" href="#">
          Contact me
        </a>
      </nav>
    </header>
  );
}