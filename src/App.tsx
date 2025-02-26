"use client"

import React, { useState, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import LoadingSpinner from "./components/LoadingSpinner"

// Lazy load components for better performance
const MainContent = React.lazy(() => import("./components/MainContent"))
const CardioWorkout = React.lazy(() => import("./components/CardioWorkout"))
const WarmUp = React.lazy(() => import("./components/WarmUp"))
const CarRacingGame = React.lazy(() => import("./components/CarRacingGame"))
const ChestWorkout = React.lazy(() => import("./components/ChestWorkout"))
const BackWorkout = React.lazy(() => import("./components/BackWorkout"))
const LegsWorkout = React.lazy(() => import("./components/LegsWorkout"))

function App() {
  const [selectedDietType, setSelectedDietType] = useState<string | null>(null)

  const handleDietSelect = (dietType: string) => {
    setSelectedDietType(dietType)
  }

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar onDietSelect={handleDietSelect} />
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/main"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <MainContent selectedDietType={selectedDietType} />
                  </motion.div>
                }
              />
              <Route
                path="/cardio"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <CardioWorkout />
                  </motion.div>
                }
              />
              <Route
                path="/warmup"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <WarmUp />
                  </motion.div>
                }
              />
              <Route
                path="/game"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <CarRacingGame />
                  </motion.div>
                }
              />
              <Route
                path="/chest"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <ChestWorkout />
                  </motion.div>
                }
              />
              <Route
                path="/back"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <BackWorkout />
                  </motion.div>
                }
              />
              <Route
                path="/legs"
                element={
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <LegsWorkout />
                  </motion.div>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

