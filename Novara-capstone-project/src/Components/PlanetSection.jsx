import { useEffect, useState } from 'react';
import PlanetCard from './PlanetCard';

function PlanetSection() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('YOUR_API_LINK')
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section id="planets" className="planet-section">
      <h2>Planet Data</h2>

      <div className="planet-container">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            distance={planet.distance}
            image={planet.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PlanetSection;