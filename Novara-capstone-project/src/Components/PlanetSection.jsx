import "./PlanetSection.css";

import { useEffect, useState } from "react";

import PlanetCard from "./PlanetCard";

import { fetchPlanets } from "../services/api";

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
      <h2>Visualizing the Differences Between Planets</h2>

      <p className="planet-subtext">
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      <div className="planet-container">
        {planets.map((planet, index) => (
          <PlanetCard
            key={index}
            name={planet.planet}
            distance={planet.distanceFromSun}
            image={planet.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PlanetSection;
