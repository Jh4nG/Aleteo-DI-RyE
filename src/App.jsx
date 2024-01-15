import { useState } from 'react'
import { Mundo } from './module/Mundo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mundo />
    </>
  )
}

export default App
