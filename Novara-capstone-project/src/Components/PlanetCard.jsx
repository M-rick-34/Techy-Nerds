import venusImage from "../assets/venus.jpg";
import neptuneImage from "../assets/neptune.jpg";

function PlanetCard({ name, distance, image }) {
  function handleFallback(e) {
    if (name === "Venus") {
      e.target.src = venusImage;
    } else if (name === "Neptune") {
      e.target.src = neptuneImage;
    }
  }

  return (
    <figure className="planet-card">
      <img src={image} alt={name} onError={handleFallback} />

      <figcaption>
        <h3>{name}</h3>

        <p>
          Distance from Sun:
          <span> {distance} million km</span>
        </p>
      </figcaption>
    </figure>
  );
}

export default PlanetCard;
