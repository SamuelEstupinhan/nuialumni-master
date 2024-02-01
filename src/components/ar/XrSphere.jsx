import React from "react";
import { Sphere } from "@react-three/drei";

function XrSphere() {
  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, -3]} castShadow receiveShadow>
      <meshStandardMaterial color="blue" />
    </Sphere>
  );
}

export default XrSphere;