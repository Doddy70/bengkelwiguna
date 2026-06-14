"use client";

import React, { useEffect, useRef } from "react";
import Zdog from "zdog";

interface ZdogIconProps {
  type: "map" | "clock" | "message" | "precision" | "speed" | "shield";
  color?: string;
  size?: number;
}

export default function ZdogIcon({ type, color = "#224297", size = 40 }: ZdogIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const illo = new Zdog.Illustration({
      element: canvasRef.current,
      zoom: size / 40,
    });

    if (type === "map") {
      // Pin icon
      const pin = new Zdog.Anchor({
        addTo: illo,
        translate: { y: -5 },
      });

      new Zdog.Shape({
        addTo: pin,
        path: [
          { x: 0, y: 15 },
          { bezier: [
            { x: -15, y: 5 },
            { x: -15, y: -10 },
            { x: 0, y: -15 }
          ]},
          { bezier: [
            { x: 15, y: -10 },
            { x: 15, y: 5 },
            { x: 0, y: 15 }
          ]}
        ],
        stroke: 8,
        color: color,
        fill: true,
      });

      new Zdog.Ellipse({
        addTo: pin,
        diameter: 8,
        translate: { z: 5 },
        stroke: 2,
        color: "#fff",
        fill: true,
      });
    } else if (type === "clock") {
      // Clock icon
      const clock = new Zdog.Anchor({
        addTo: illo,
      });

      new Zdog.Ellipse({
        addTo: clock,
        diameter: 30,
        stroke: 6,
        color: color,
      });

      // Hour hand
      new Zdog.Shape({
        addTo: clock,
        path: [{ y: 0 }, { y: -8 }],
        stroke: 4,
        color: color,
      });

      // Minute hand
      new Zdog.Shape({
        addTo: clock,
        path: [{ x: 0 }, { x: 10 }],
        stroke: 4,
        color: color,
      });
    } else if (type === "message") {
      // Chat icon
      const bubble = new Zdog.Anchor({
        addTo: illo,
      });

      new Zdog.RoundedRect({
        addTo: bubble,
        width: 25,
        height: 20,
        cornerRadius: 4,
        stroke: 6,
        color: color,
        fill: true,
      });

      new Zdog.Polygon({
        addTo: bubble,
        sides: 3,
        radius: 6,
        translate: { x: -8, y: 12 },
        rotate: { z: Math.PI / 4 },
        stroke: 4,
        color: color,
        fill: true,
      });
    } else if (type === "precision") {
      // Target/Precision icon
      const target = new Zdog.Anchor({ addTo: illo });
      
      new Zdog.Ellipse({
        addTo: target,
        diameter: 30,
        stroke: 2,
        color: color,
      });
      
      new Zdog.Ellipse({
        addTo: target,
        diameter: 15,
        stroke: 4,
        color: color,
      });
      
      // Crosshair lines
      [0, 90, 180, 270].forEach(angle => {
        new Zdog.Shape({
          addTo: target,
          path: [{ y: 12 }, { y: 20 }],
          rotate: { z: (angle * Math.PI) / 180 },
          stroke: 3,
          color: color,
        });
      });
    } else if (type === "speed") {
      // Lightning/Speed icon
      new Zdog.Shape({
        addTo: illo,
        path: [
          { x: 5, y: -20 },
          { x: -15, y: 0 },
          { x: -5, y: 0 },
          { x: -15, y: 20 },
          { x: 15, y: 0 },
          { x: 5, y: 0 },
        ],
        stroke: 4,
        color: color,
        fill: true,
        closed: true,
      });
    } else if (type === "shield") {
      // Shield/Trust icon
      new Zdog.Shape({
        addTo: illo,
        path: [
          { x: 0, y: -18 },
          { x: 15, y: -12 },
          { x: 15, y: 5 },
          { bezier: [
            { x: 15, y: 15 },
            { x: 0, y: 22 },
            { x: 0, y: 22 }
          ]},
          { bezier: [
            { x: 0, y: 22 },
            { x: -15, y: 15 },
            { x: -15, y: 5 }
          ]},
          { x: -15, y: -12 },
        ],
        stroke: 4,
        color: color,
        fill: true,
        closed: true,
      });
    }

    let isCancelled = false;
    const animate = () => {
      if (isCancelled) return;
      illo.rotate.y += 0.03;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isCancelled = true;
    };
  }, [type, color, size]);

  return <canvas ref={canvasRef} width={size * 2} height={size * 2} style={{ width: size, height: size }} />;
}
