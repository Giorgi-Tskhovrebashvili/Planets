import { useState } from "react";
import { Footer, Image, Button, PlanetInfo } from "../../components";
import JasonData from "../../data/data.json";
import { PlanetType } from "../../types";
import { Link } from "react-router-dom";
import structure from "../../assets/UranusImages/uranusMiddle.png";
import styles from "./Uranus.module.css";

const UranusMiddle = () => {
  const [data] = useState<PlanetType[]>(JasonData);
  return (
    <div>
      {data
        .filter((item) => item.name === "Uranus")
        .map((fact) => {
          return (
            <div className={styles.container}>
              <div className={styles.planetContainer}>
                <div className={styles.mobile}>
                  <Link to={"/Uranus"}>
                    <Button
                      number={""}
                      linkName={"OVERVIEW"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                  <Link to={"/Uranus-structure"}>
                    <Button
                      number={""}
                      linkName={"STRUCTURE"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                  <Link to={"/Uranus-geology"}>
                    <Button
                      number={""}
                      linkName={"SURFACE"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                </div>
                <div className={styles.imageContainer}>
                  <Image image={structure} className={styles.img} />
                </div>
                <div className={styles.infoContainer}>
                  <PlanetInfo
                    title={fact.name}
                    info={fact.structure.content}
                    tag={"Source : "}
                    link={fact.structure.source}
                    children={"Wikipedia"}
                  />
                  <div className={styles.desktop}>
                    <Link className={styles.overview} to={"/Uranus"}>
                      <Button
                        number={"01"}
                        linkName={"OVERVIEW"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                    <Link className={styles.structure} to={"/Uranus-structure"}>
                      <Button
                        number={"02"}
                        linkName={"INTERNAL STRUCTURE"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                    <Link className={styles.geology} to={"/Uranus-geology"}>
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

export default UranusMiddle;
