import { render } from 'react-dom'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import App from './App'

render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </>,
  document.getElementById('root'),
)
