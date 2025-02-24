import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import CardioWorkout from "./components/CardioWorkout";
import WarmUp from "./components/WarmUp";
import CarRacingGame from "./components/CarRacingGame";
import AnimatedBackground from "./components/AnimatedBackground";
import "typeface-bebas-neue";

function App() {
  const [selectedDietType, setSelectedDietType] = useState<string | null>(null);

  const handleDietSelect = (dietType: string) => {
    setSelectedDietType(dietType);
  };

  return (
<Router>
  <div className="relative min-h-screen">
    {/* Background layer */}
    <div className="fixed inset-0" style={{ zIndex: -1 }}>
      <AnimatedBackground />
    </div>
    {/* Foreground content */}
    <div className="relative z-10">
      <Navbar onDietSelect={handleDietSelect} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainContent selectedDietType={selectedDietType} />} />
        <Route path="/cardio" element={<CardioWorkout />} />
        <Route path="/warmup" element={<WarmUp />} />
        <Route path="/game" element={<CarRacingGame />} />
      </Routes>
    </div>
  </div>
</Router>

  );
}

export default App;