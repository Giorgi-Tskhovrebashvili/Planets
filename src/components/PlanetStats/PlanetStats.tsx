import { PlanetStatsType } from "../../types";

const PlanetStats = ({ title, information }: PlanetStatsType) => {
  return (
    <div>
      <p>{title}</p>
      <h1>{information}</h1>
    </div>
  );
};

export default PlanetStats;
