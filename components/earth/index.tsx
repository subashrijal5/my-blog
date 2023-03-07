import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap  from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { Mesh, TextureLoader } from "three";
import FloatingProgrammer from "../programmer/FloatingProgrammer";
type Props = {
    children?: React.ReactNode;
};


export function Earth({ children }: Props) : JSX.Element  {
  const [colorMap, normalMap, specularMap, cloudsMap]  = useLoader(
    TextureLoader,
    [EarthDayMap.src, EarthNormalMap.src, EarthSpecularMap.src, EarthCloudsMap.src]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 6]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        // fade={true}
      />
          <FloatingProgrammer />
      <mesh ref={cloudsRef} position={[0, -0.5, 3]}>
        <sphereGeometry args={[0.505, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, -0.5, 3]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
          {/* <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          /> */}
      </mesh>

      {/* <mesh ref={cloudsRef} position={[0.5, 1.5, 3]}>
        <sphereGeometry args={[0.205, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.8}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh> */}
    </>
  );
}