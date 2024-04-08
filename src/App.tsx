import { useEffect, useRef } from "react";
import {
  EarthImage,
  JupiterImage,
  MarsImage,
  MercuryImage,
  NeptuneImage,
  SaturnImage,
  Sun,
  UranusImage,
  VenusImage,
} from "./assets";
import { CelestialBody } from "./types";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const SunImage = new Image();
    SunImage.src = Sun;

    const mercuryImg = new Image();
    mercuryImg.src = MercuryImage;

    const venusImg = new Image();
    venusImg.src = VenusImage;

    const earthImg = new Image();
    earthImg.src = EarthImage;

    const marsImg = new Image();
    marsImg.src = MarsImage;

    const jupiterImg = new Image();
    jupiterImg.src = JupiterImage;

    const saturnImg = new Image();
    saturnImg.src = SaturnImage;

    const uranusImg = new Image();
    uranusImg.src = UranusImage;

    const neptuneImg = new Image();
    neptuneImg.src = NeptuneImage;

    // Wait for images to load
    Promise.all([
      new Promise((resolve) => {
        SunImage.onload = resolve;
      }),
      new Promise((resolve) => {
        mercuryImg.onload = resolve;
      }),
      new Promise((resolve) => {
        venusImg.onload = resolve;
      }),
      new Promise((resolve) => {
        earthImg.onload = resolve;
      }),
      new Promise((resolve) => {
        marsImg.onload = resolve;
      }),
      new Promise((resolve) => {
        jupiterImg.onload = resolve;
      }),
      new Promise((resolve) => {
        saturnImg.onload = resolve;
      }),
      new Promise((resolve) => {
        uranusImg.onload = resolve;
      }),
      new Promise((resolve) => {
        neptuneImg.onload = resolve;
      }),
    ]).then(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const sun: CelestialBody = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 30,
        orbitRadius: 0,
        angle: 0,
        speed: 0,
        image: SunImage,
      };
      const planets: CelestialBody[] = [
        {
          x: 0,
          y: 0,
          radius: 7,
          orbitRadius: 50,
          angle: 0,
          speed: 0.01,
          image: mercuryImg,
        },
        {
          x: 0,
          y: 0,
          radius: 10,
          orbitRadius: 80,
          angle: 0,
          speed: 0.008,
          image: venusImg,
        },
        {
          x: 0,
          y: 0,
          radius: 10,
          orbitRadius: 110,
          angle: 0,
          speed: 0.006,
          image: earthImg,
        },
        {
          x: 0,
          y: 0,
          radius: 8,
          orbitRadius: 140,
          angle: 0,
          speed: 0.005,
          image: marsImg,
        },
        {
          x: 0,
          y: 0,
          radius: 20,
          orbitRadius: 190,
          angle: 0,
          speed: 0.004,
          image: jupiterImg,
        },
        {
          x: 0,
          y: 0,
          radius: 18,
          orbitRadius: 240,
          angle: 0,
          speed: 0.003,
          image: saturnImg,
        },
        {
          x: 0,
          y: 0,
          radius: 15,
          orbitRadius: 290,
          angle: 0,
          speed: 0.002,
          image: uranusImg,
        },
        {
          x: 0,
          y: 0,
          radius: 14,
          orbitRadius: 340,
          angle: 0,
          speed: 0.001,
          image: neptuneImg,
        },
      ];

      const drawCelestialBody = (body: CelestialBody) => {
        ctx.drawImage(
          body.image,
          body.x - body.radius,
          body.y - body.radius,
          body.radius * 2,
          body.radius * 2
        );
      };

      const drawOrbit = (orbitRadius: number) => {
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "#808080";
        ctx.stroke();
        ctx.closePath();
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawCelestialBody(sun);

        planets.forEach((planet) => {
          planet.x = sun.x + Math.cos(planet.angle) * planet.orbitRadius;
          planet.y = sun.y + Math.sin(planet.angle) * planet.orbitRadius;
          planet.angle += planet.speed;

          drawOrbit(planet.orbitRadius);
          drawCelestialBody(planet);
        });

        requestAnimationFrame(animate);
      };

      animate();
    });
  }, []);

  return <canvas ref={canvasRef} width={750} height={700} />;
};

export default App;
