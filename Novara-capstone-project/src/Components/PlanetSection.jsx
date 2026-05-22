/*
import { useEffect, useState } from 'react';

import PlanetCard from './PlanetCard';

import { fetchPlanets } from '../services/api';

function PlanetSection() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getPlanetData() {
      const data = await fetchPlanets();

      setPlanets(data);
    }

    getPlanetData();
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

export default PlanetSection; */