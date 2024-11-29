import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function Carousel({img,h1Text,pText}) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <Fade direction="down">
            <h1 className="mb-5 text-5xl font-bold">{h1Text}</h1>
            <p className="mb-5">{pText}</p>
          </Fade>
          <Fade direction="up">
            <button className="text-xl w-32 h-12 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
              <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              <Link to='all-foods'>All Foods</Link>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
