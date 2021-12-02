import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Controls from './components/Controls'
import Level from './components/Level'
import Sudo from './components/Sudo'
import Camera from './components/Camera'
import Cactus from './components/Cactus'
import Cube from './components/Cube'
import Pyramid from './components/Pyramid'

export default function App() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [5, 1, 5] }}>
      <color attach="background" args={['#e0b7ff']} />
      <ambientLight />
      <Controls>
        <group position-y={-0.75} dispose={null}>
          <Level />
          <Sudo />
          <Camera />
          <Cactus />
          <Cube />
          <Pyramid />
        </group>
      </Controls>
      <EffectComposer multisampling={8}>
        <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.01} kernelSize={5} />
      </EffectComposer>
    </Canvas>
  )
}
