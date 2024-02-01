import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrSphere from './XrSphere'; 

function EjAR() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <XrSphere />
        </XR>
      </Canvas>
    </>
  );
}

export default EjAR;