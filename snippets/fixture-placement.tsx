/**
 * Fixture Placement Rendering
 *
 * Demonstrates how lighting fixtures are positioned and transformed
 * within the scene using deterministic spatial calculations.
 *
 * Key Concepts:
 * - Depth-based scaling
 * - Ground tilt simulation
 * - Interactive selection handling
 */

import React from "react";

function computeDepthScale(y: number): number {
  return Math.min(1.35, Math.max(0.65, 0.7 + y * 0.85));
}

function computeGroundTilt(y: number): number {
  return 0.75 + y * 0.25;
}

export function LightingOverlayExample({ fixtures, onSelect }: any) {
  return (
    <>
      {fixtures.map((f: any) => {
        const depthScale = computeDepthScale(f.y);
        const groundTilt = computeGroundTilt(f.y);

        const size = 72 * depthScale;

        return (
          <div
            key={f.id}
            onPointerDown={() => onSelect(f.id)}
            style={{
              position: "absolute",
              left: `${f.x * 100}%`,
              top: `${f.y * 100}%`,
              width: size,
              height: size,
              transform: `
                translate(-50%, -50%)
                rotate(${f.rotationX}deg)
                scaleY(${groundTilt})
              `,
              transformOrigin: "center bottom",
            }}
          >
            <img src={f.imageUrl} alt="" draggable={false} />
          </div>
        );
      })}
    </>
  );
}
