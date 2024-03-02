import football from "../../Images/football.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__info"></div>
      <div className="hero__image">
        <img className="image" src={football}></img>
      </div>
    </div>
  );
}

export default Hero;
