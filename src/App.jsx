import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './Screen Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    </>
  )
}

export default App
