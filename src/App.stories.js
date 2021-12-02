import React from 'react'
import App from './App'

export default {
  title: 'App/App',
  component: App,
  args: {
    noStage: true,
  },
}

export const Default = () => <App />
Default.storyName = 'App'
