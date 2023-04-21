import './ButtonTheme.css';
import { useEffect, useState } from 'react';
import DarkSvg from '../../assets/svg/dark.svg';

export default function ButtonTheme() {
  const [theme, setTheme] = useState('light');
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#000' : '#fff'
  }, [theme]);

  return (
    <button className={`${theme} button-dark`} onClick={toggleTheme}>
      <img src={DarkSvg} alt={'Dark mode'} />
    </button>
  );
}
