import "./Home.css";
import SvgOrange from "../../assets/svg/SvgOrange";
import SvgCoveragePhoto from "../../assets/svg/SvgCoveragePhoto";
import Img1 from "../../assets/images/1.jpeg";
import Person from "../../components/Person/Person";

export default function Home() {
  return (
    // <section className="section">
    //   <div style={{
    //     padding : '1rem',
    //     maxWidth: '28rem',
    //     width: '100%'
    //   }}>
        
    //   </div>
    //   <article className="section__article article">
    //     <div className="article__svg-container">
    //       <SvgOrange />
    //       <SvgCoveragePhoto />
    //       <img src={Img1} alt="imagen" height={300}style={{position: 'absolute', top:0}}/>
    //     </div>
    //   </article>

      
    // </section>
    <Person/>
  );
}
