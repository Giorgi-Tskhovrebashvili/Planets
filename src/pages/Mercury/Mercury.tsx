import { useState } from "react";
import { Footer, Image, Button, PlanetInfo } from "../../components";
import JasonData from "../../data/data.json";
import { PlanetType } from "../../types";
import overview from '../../assets/MercuryImages/Mercury.png'
import { Link } from "react-router-dom";

const Mercury = () => {
  const [data] = useState<PlanetType[]>(JasonData);
  return (
    <div>
      {data
        .filter((item) => item.name === "Mercury")
        .map((fact) => {
          return (
            <>
              <div>
                <div>
                  <Image image={overview} />
                </div>
                <PlanetInfo
                  title={fact.name}
                  info={fact.overview.content}
                  tag={"Source : "}
                  link={fact.overview.source}
                  children={"Wikipedia"}
                />
                <div>
                  <Link to={"/Earth"}>
                    <Button
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      number={"01"}
                      linkName={"OVERVIEW"}
                    />
                  </Link>
                  <Link to={"/Earth-structure"}>
                    <Button
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      number={"02"}
                      linkName={"INTERNAL STRUCTURE"}
                    />
                  </Link>
                  <Link to={"/Earth-geology"}>
                    <Button
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      number={"03"}
                      linkName={"SURFACE GEOLOGY"}
                    />
                  </Link>
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
            </>
          );
        })}
    </div>
  );
};

export default Mercury;
