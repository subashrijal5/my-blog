import { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../components/earth";
import { TopSection } from "../components/topSection";
import FrontLayout from "../layouts/Front";
import SpaceScene from "../components/programmer/SpaceScene";


const Game: NextPage = () => {
  return (
    <FrontLayout>
      {/* <SpaceScene/> */}
    <div className="w-full h-full ">
      {/* <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense> 
      </Canvas>
      <TopSection />  */}
    </div>
    </FrontLayout>
  );
};
export default Game;
