import './Person.css';
import Img1 from '../../assets/images/1.jpeg';

export default function Person() {
  return (
    <article className="person-container">
      <div className="person-container__div">
        <div style={{ position: 'relative' }}>
          <div className="experience-container">
            <div className="experience-text">
              <div className="experience-columns">
                <strong className="experience-ages">4+</strong>
                <span>years experience</span>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="person-container__div__orange"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="48.79 79.87 377.21 348.24"
        >
          <path
            fill="#FE5B02"
            d="M397 326.5q-57 86.5-165 100T71 340Q18 240 91.5 175.5t163-90Q344 60 399 150t-2 176.5Z"
          ></path>
        </svg>
        <svg viewBox="0 0 390.3 414.4" width="0" height="0">
          <clipPath
            id="blob3"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.002562, 0.002413)"
          >
            <path
              d="M276.8,56.9c23.5,25.9,33.9,61.3,53.7,95.3c19.8,33.9,49,66.4,57.3,104.6c8.2,38.2-4.5,82.3-35.2,102.2
    c-30.6,20-79.2,15.8-121.3,23.7c-42.1,7.8-77.8,27.6-118.6,31.1c-40.9,3.5-86.9-9.3-99.3-41.4c-12.3-32.1,8.9-83.4,8.9-127.5
    c0-44.2-21.1-81.2-22.3-121.6C-1.1,82.9,17.9,39,51.2,17.6C84.6-3.9,132.3-2.9,174.5,5.8S253.3,30.9,276.8,56.9z"
            ></path>
          </clipPath>
        </svg>
      </div>
      <div className="picture-container">
        <img
          className="photo-presentation"
          src={Img1}
          alt="Foto de Carlos Zulbaran"
          width="299"
          height="384"
          decoding="async"
          fetchpriority={'high'}
        />
      </div>
    </article>
  );
}
