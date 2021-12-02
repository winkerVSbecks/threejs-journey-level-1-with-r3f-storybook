import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, Center, OrbitControls } from '@react-three/drei'
import '../src/styles.css'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (StoryFn, options) => (
    <Suspense fallback={null}>
      {options.args.noStage ? (
        <StoryFn />
      ) : (
        <Canvas>
          <color attach="background" args={['#e0b7ff']} />
          <Stage>
            <Center>
              <StoryFn />
            </Center>
            {options.args.noControls ? null : <OrbitControls />}
          </Stage>
        </Canvas>
      )}
    </Suspense>
  ),
]
