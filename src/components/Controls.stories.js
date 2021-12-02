import { Box } from '@react-three/drei'
import React from 'react'
import Controls from './Controls'

export default {
  title: 'Components/Controls',
  component: Controls,
  args: { noControls: true },
}

export const Default = () => (
  <Controls>
    <Box>
      <meshStandardMaterial color="red" />
    </Box>
  </Controls>
)
Default.storyName = 'Controls'
