import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrCube() {

  
    const cubeRef = useRef();
    
    
   
    useFrame((state, delta) => {
        //console.log(cubeRef)    
        cubeRef.current.rotation.y += delta;
    
    });

return (<>
    {}
    <OrbitControls />
    {}
    <ambientLight />
    {}
    <mesh ref={cubeRef} position={[0, 0, -5]}>
        <boxGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial color='hotpink' />
    </mesh>
     

    </>

)
}

export default XrCube;
