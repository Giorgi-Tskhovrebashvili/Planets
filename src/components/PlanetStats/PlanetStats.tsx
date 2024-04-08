import { PlanetStatsType } from "../../types";
import styles from './PlanetStats.module.css'

const PlanetStats = ({ title, information }: PlanetStatsType) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <h1 className={styles.info}>{information}</h1>
    </div>
  );
};

export default PlanetStats;
