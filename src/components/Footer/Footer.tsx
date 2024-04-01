import { FooterTypes } from "../../types";
import PlanetStats from "../PlanetStats/PlanetStats";

const Footer = ({
  rotationTime,
  rotationStats,
  revolutionTime,
  revolutionStats,
  radius,
  radiusStats,
  averageTempature,
  tempatureStats,
}: FooterTypes) => {
  return (
    <footer>
      <PlanetStats title={rotationTime} information={rotationStats} />
      <PlanetStats title={revolutionTime} information={revolutionStats} />
      <PlanetStats title={radius} information={radiusStats} />
      <PlanetStats title={averageTempature} information={tempatureStats} />
    </footer>
  );
};

export default Footer;
