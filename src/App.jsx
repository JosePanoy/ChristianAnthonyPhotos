import { useState } from 'react'
import HomePage from '../components/home.jsx'
import TopContent from '../components/top-content.jsx'
import LandScape from '../components/landscape.jsx'
import Portrait from '../components/portrait.jsx'
import Contact from '../components/contact.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    <TopContent />
    <LandScape />
    <Portrait />
    <Contact />
    </>
  )
}

export default App
