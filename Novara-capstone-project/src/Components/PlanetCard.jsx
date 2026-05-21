function PlanetCard({ name, distance, image }) {
  return (
    <figure className="planet-card">
      <img src={image} alt={name} />

      <figcaption>
        <h3>{name}</h3>
        <p>{distance}</p>
      </figcaption>
    </figure>
  );
}

export default PlanetCard;