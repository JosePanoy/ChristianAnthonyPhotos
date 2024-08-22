import { useState } from 'react'
import Navbar from '../components/navbar.jsx'
import TopContent from '../components/top-content.jsx'
import MidContent from '../components/mid-content.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <TopContent />
    <MidContent />

    </>
  )
}

export default App
