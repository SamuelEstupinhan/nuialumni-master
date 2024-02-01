
import React, { startTransition } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function EjARSamuel() {
  const gltfLoader = new GLTFLoader();
  const gltf = useLoader(gltfLoader, '/model.gltf'); 

  return startTransition(() => (
    <primitive object={gltf.scene} position={[0, 0, -5]} />
  ));
}

export default EjARSamuel;
