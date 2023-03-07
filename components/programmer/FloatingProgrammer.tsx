// import { useRef } from "react";
// import { useFrame, useLoader } from "@react-three/fiber";
// import coder from "../../assets/coder.png";
// import * as THREE from "three";
// import { TextureLoader } from "three";

// const FloatingProgrammer = () => {
//   const programmerRef = useRef<THREE.Mesh>(null);
//   const coderTexture = useLoader(TextureLoader, coder.src);
//   useFrame(() => {
//     if (programmerRef.current) {
//       programmerRef.current.rotation.x += 0.01;
//       programmerRef.current.rotation.y += 0.02;
//       programmerRef.current.position.z -= 0.1;
//     }
//   });

//   return (
//     <mesh ref={programmerRef}>
//     <sphereGeometry args={[1, 32, 32]} />
//     <meshStandardMaterial>
//       <texture attach="map" url={coder.src} />
//     </meshStandardMaterial>
//   </mesh>
//   );
// };

// export default FloatingProgrammer;

import React, { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

const Spaceship: React.FC = () => {
  const spaceshipRef = React.useRef<THREE.Mesh>();
  const gltf = useLoader(GLTFLoader, "./computer.glb");
  let increasing = false;
  useFrame(() => {
    if (spaceshipRef.current) {
      //         spaceshipRef.current.rotation.x += 0.01;
      spaceshipRef.current.rotation.y -= 0.002;
      //         // spaceshipRef.current.position.z -= 0.3;
      //       if (Math.floor(spaceshipRef.current.position.z) == -200) {
      //         increasing = false;
      //       }
      //       if (Math.floor(spaceshipRef.current.position.z) == -100) {
      //         increasing = true;
      //       }
      //       if (increasing) {
      //         spaceshipRef.current.position.z -= 0.1;
      //       } else {
      //         spaceshipRef.current.position.z += 0.1;
      //       }
    }
  });

  return (
    <mesh ref={spaceshipRef} position={[0, 40, -150]} rotation-x={0.5}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

const SpaceScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[1, 1, 1]} /> */}
      <Spaceship />
      <OrbitControls />
    </>
  );
};

const FloatingProgrammer: React.FC = () => {
  return <SpaceScene />;
};

export default FloatingProgrammer;
