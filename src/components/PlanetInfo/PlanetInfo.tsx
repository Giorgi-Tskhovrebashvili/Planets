import { Link } from "react-router-dom";
import { PlanetInfoType } from "../../types";
import  styles from "./PlanetInfo.module.css"

const PlanetInfo = ({ title, info, tag, link, children }: PlanetInfoType) => {
  return (
    <div className={styles.planetInfo}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.info}>{info}</p>
      <p className={styles.tag}>
        {tag}
        <Link className={styles.link} to={link}>{children}</Link>
      </p>
    </div>
  );
};

export default PlanetInfo;
