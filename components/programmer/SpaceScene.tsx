import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FloatingProgrammer from './FloatingProgrammer'

const SpaceScene = () => {
  return (
    <Canvas>
      <ambientLight />
      
      <pointLight position={[10, 10, 10]} />
      <pointLight color="#f6f3ea" position={[2, 0, 6]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        // fade={true}
      />
  
    </Canvas>
  )
}

export default SpaceScene
