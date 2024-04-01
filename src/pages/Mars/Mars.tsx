import { useState } from "react";
import { Footer, Image, Button, PlanetInfo } from "../../components";
import JasonData from "../../data/data.json";
import { PlanetType } from "../../types";

const Mars = () => {
    const [data] = useState<PlanetType[]>(JasonData);
    return (
      <div>
        {data
          .filter((item) => item.name === "Mars")
          .map((fact) => {
            return (
              <>
                <div>
                  <div>
                    <Image image={fact.images.planet} />
                  </div>
                  <PlanetInfo
                    title={fact.name}
                    info={fact.overview.content}
                    tag={"Source : "}
                    link={fact.overview.source}
                    children={"Wikipedia"}
                  />
                  <div>
                    <Button
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      number={"01"}
                      linkName={"OVERVIEW"}
                    />
                    <Button
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      number={"02"}
                      linkName={"INTERNAL STRUCTURE"}
                    />
                    <Button
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      number={"03"}
                      linkName={"SURFACE GEOLOGY"}
                    />
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
}

export default Mars
