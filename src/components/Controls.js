import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import { useDrag } from '@use-gesture/react'

export default function Controls({ children, minPolarAngle = Math.PI / -4, maxPolarAngle = Math.PI / 2, rotation = [0, 0, 0] }) {
  const { size, gl } = useThree()
  const [spring, api] = useSpring(() => ({ rotation, config: { tension: 350, mass: 2, friction: 20 } }))
  useDrag(
    ({ movement: [x], down }) => {
      const [y, , z] = rotation
      x = THREE.MathUtils.clamp(x / size.width, minPolarAngle, maxPolarAngle)
      api.start({ rotation: down ? [y, x * 1.25, z] : rotation })
    },
    { target: gl.domElement },
  )
  return <a.group {...spring}>{children}</a.group>
}
