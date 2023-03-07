import MobileDrawer from "../components/Navigation/MobileDrawer";
import React, { Suspense } from "react";
import Sidebar from "../components/Navigation/Sidebar";
import { Earth } from "../components/earth";
import { Canvas } from "@react-three/fiber";

type Props = {
  children?: React.ReactNode;
};
export default function FrontLayout({ children }: Props): JSX.Element {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* <div className="drawer-content flex flex-1">
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div> */}
      <div className="drawer-content flex justify-center lg:justify-start">
        <div className="max-w-screen-lg lg:pt-4 lg:p-4">
          <MobileDrawer />
          {children}
        </div>
        <div className="w-full hidden lg:block ">
          <Canvas className="w-full overflow-scroll">
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
