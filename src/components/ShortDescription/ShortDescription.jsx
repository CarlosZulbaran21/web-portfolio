import './ShortDescription.css';

export default function ShortDescription () {
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
    </article>
  )
}
