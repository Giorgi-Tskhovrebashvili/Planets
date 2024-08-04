import { useState } from "react";
import { Footer, Image, Button, PlanetInfo } from "../../components";
import JasonData from "../../data/data.json";
import { PlanetType } from "../../types";
import { Link } from "react-router-dom";
import overview from "../../assets/NeptuneImages/Neptune.png";
import styles from "./Neptune.module.css";

const Neptune = () => {
  const [data] = useState<PlanetType[]>(JasonData);
  return (
    <div>
      {data
        .filter((item) => item.name === "Neptune")
        .map((fact) => {
          return (
            <div className={styles.container}>
              <div className={styles.planetContainer}>
                <div className={styles.mobile}>
                  <Link to={"/Neptune"}>
                    <Button
                      number={""}
                      linkName={"OVERVIEW"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                  <Link to={"/Neptune-structure"}>
                    <Button
                      number={""}
                      linkName={"STRUCTURE"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                  <Link to={"/Neptune-geology"}>
                    <Button
                      number={""}
                      linkName={"SURFACE"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                </div>
                <div className={styles.imageContainer}>
                  <Image image={overview} className={styles.img} />
                </div>
                <div className={styles.infoContainer}>
                  <PlanetInfo
                    title={fact.name}
                    info={fact.overview.content}
                    tag={"Source : "}
                    link={fact.overview.source}
                    children={"Wikipedia"}
                  />
                  <div className={styles.desktop}>
                    <Link className={styles.overview} to={"/Neptune"}>
                      <Button
                        number={"01"}
                        linkName={"OVERVIEW"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                    <Link
                      className={styles.structure}
                      to={"/Neptune-structure"}
                    >
                      <Button
                        number={"02"}
                        linkName={"INTERNAL STRUCTURE"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                    <Link className={styles.geology} to={"/Neptune-geology"}>
                      <Button
                        number={"03"}
                        linkName={"SURFACE GEOLOGY"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <Footer
                rotationTime={"ROTATION TIME"}
                rotationStats={fact.rotation}
                revolutionTime={"REVOLUTION TIME"}
                revolutionStats={fact.revolution}
                radius={"RADIUS"}
                radiusStats={fact.radius}
                averageTempature={"AVERAGE TEMP."}
                tempatureStats={fact.temperature}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Neptune;
