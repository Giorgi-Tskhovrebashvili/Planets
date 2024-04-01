export interface MainLayoutType {
  children: React.ReactNode;
}

export interface PlanetType {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export interface PlanetStatsType {
  title: string;
  information: string;
}

export interface FooterTypes {
  rotationTime: string;
  rotationStats: string;
  revolutionTime: string;
  revolutionStats: string;
  radius: string;
  radiusStats: string;
  averageTempature: string;
  tempatureStats: string;
}

export interface ImageType {
  image: string;
}

export interface ButtonType {
  onClick: () => void;
  number: string;
  linkName: string;
}

export interface PlanetInfoType {
  title: string;
  info: string;
  tag: string;
  link: string;
  children: string;
}
