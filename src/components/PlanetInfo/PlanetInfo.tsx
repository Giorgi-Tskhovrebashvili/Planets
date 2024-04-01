import { Link } from "react-router-dom";
import { PlanetInfoType } from "../../types";

const PlanetInfo = ({ title, info, tag, link, children }: PlanetInfoType) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{info}</p>
      <p>
        {tag}
        <Link to={link}>{children}</Link>
      </p>
    </div>
  );
};

export default PlanetInfo;
