import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const countries = [
  // Africa
  {
    name: "Kenya",
    lat: -1.286389,
    lng: 36.817223,
     color: " rgba(96, 179, 247, 0.8) ",
    size: 0.45,
  },
  {
    name: "South Africa",
    lat: -26.2041,
    lng: 28.0473,
    color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },

  // North America
  {
    name: "USA",
    lat: 38.9072,
    lng: -77.0369,
     color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },
  {
    name: "Canada",
    lat: 45.4215,
    lng: -75.6972,
    color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },

  // South America
  {
    name: "Brazil",
    lat: -23.5558,
    lng: -46.6333,
     color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },
  {
    name: "Chile",
    lat: -33.4489,
    lng: -70.6693,
    color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },

  // Europe
  {
    name: "Germany",
    lat: 52.52,
    lng: 13.405,
    color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },
  {
    name: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },

  // Asia
  {
    name: "China",
    lat: 39.9042,
    lng: 116.4074,
     color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },
  {
    name: "India",
    lat: 28.6139,
    lng: 77.2090,
    color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },

  // Oceania
  {
    name: "Australia",
    lat: -35.2809,
    lng: 149.1300,
     color: " rgba(96, 179, 247, 0.8) ",
    size: 0.4,
  },
];

export default function DotsMap() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = true;
  }, []);

  return (
    <div className="globe-container">
      <Globe
        ref={globeRef}
        height={500}
        width={window.innerWidth}
        backgroundColor="rgba(0, 0, 0, 0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere
        atmosphereColor="#00b7ff"
        atmosphereAltitude={0.12}
        pointsData={countries}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.05}
        pointRadius={0.35}
        labelsData={countries}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelColor={() => "#ffffff"}
        labelSize={1.2}
        labelDotRadius={0.25}
        labelAltitude={0.02}
        htmlElementsData={countries}
        htmlLat="lat"
        htmlLng="lng"
        htmlElement={(d: any) => {
          const el = document.createElement("div");

          el.innerHTML = `
            <div
              style="
                width:10px;
                height:10px;
                border-radius:20px;
                background:${d.color};
                box-shadow:
                  0 0 10px ${d.color},
                  0 0 20px ${d.color},
                  0 0 40px ${d.color};
                animation:pulse 2s infinite;
              "
            />
          `;

          return el;
        }}
      />

      <style>
        {`
          body {
            margin: 0;
            overflow: hidden;
            background: black;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }

            50% {
              transform: scale(0.);
              opacity: 0.7;
            }

            100% {
              transform: scale(2));
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}