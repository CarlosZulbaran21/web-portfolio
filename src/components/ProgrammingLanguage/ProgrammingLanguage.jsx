import './ProgrammingLanguage.css';

// eslint-disable-next-line react/prop-types
export default function ProgrammingLanguage({ language = '', icon = '' }) {
  return (
    <div className={`language-container language-${language}`}>
      <img
        src={icon}
        width={32}
        height={32}
        decoding={'async'}
        alt={'logo de' + language}
      />
      <span>{language}</span>
    </div>
  );
}
