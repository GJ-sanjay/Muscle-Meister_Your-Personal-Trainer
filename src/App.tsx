import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import CardioWorkout from "./components/CardioWorkout"
import WarmUp from "./components/WarmUp"
import CarRacingGame from "./components/CarRacingGame"
import "typeface-bebas-neue"

function App() {
  const [selectedDietType, setSelectedDietType] = useState<string | null>(null)

  const handleDietSelect = (dietType: string) => {
    setSelectedDietType(dietType)
  }

  return (
    <Router>
      <Navbar onDietSelect={handleDietSelect} />
      <Routes>
        {/* Updated to have HomePage as the first landing page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainContent selectedDietType={selectedDietType} />} />
        <Route path="/cardio" element={<CardioWorkout />} />
        <Route path="/warmup" element={<WarmUp />} />
        <Route path="/game" element={<CarRacingGame />} />
      </Routes>
    </Router>
  )
}

export default App
