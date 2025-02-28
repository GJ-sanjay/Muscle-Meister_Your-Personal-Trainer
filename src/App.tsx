"use client"

import React, { Suspense, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import LoadingSpinner from "./components/LoadingSpinner"
import CoreWorkout from "./components/CoreWorkout"
import AnimatedBackground from "./components/AnimatedBackground"
import ArmWorkout from "./components/ArmWorkout"
import ShoulderWorkout from "./components/ShoulderWorkout"

const MainContent = React.lazy(() => import("./components/MainContent"))
const CardioWorkout = React.lazy(() => import("./components/CardioWorkout"))
const WarmUp = React.lazy(() => import("./components/WarmUp"))
const CarRacingGame = React.lazy(() => import("./components/CarRacingGame"))
const ChestWorkout = React.lazy(() => import("./components/ChestWorkout"))
const BackWorkout = React.lazy(() => import("./components/BackWorkout"))
const LegsWorkout = React.lazy(() => import("./components/LegsWorkout"))
const HallOfFamePage = React.lazy(() => import("./components/HallOfFame"))

// ⏫ Scroll restoration on page switch
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  const [selectedDietType, setSelectedDietType] = useState<string | null>(null)
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true) // 🚀 Track loading state

  const handleDietSelect = (dietType: string) => {
    setSelectedDietType(dietType)
  }

  // ✅ Show loading spinner on route changes
  useEffect(() => {
    setIsLoading(true) // Set loading to true whenever route changes

    const timer = setTimeout(() => setIsLoading(false), 400) // Fake delay to trigger Suspense
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black">
      <Navbar onDietSelect={handleDietSelect} />
      <AnimatedBackground />
      <ScrollToTop />

      {/* ✅ Show loading spinner if a new page is loading */}
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && (
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <HomePage />
                  </motion.div>
                }
              />
              <Route
                path="/main"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <MainContent selectedDietType={selectedDietType} />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/cardio"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <CardioWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/warmup"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <WarmUp />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/game"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <CarRacingGame />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/chest"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <ChestWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/back"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <BackWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/legs"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <LegsWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/shoulders"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <ShoulderWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/arms"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <ArmWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/core"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <CoreWorkout />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route
                path="/halloffame"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Suspense fallback={<LoadingSpinner />}>
                      <HallOfFamePage />
                    </Suspense>
                  </motion.div>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      )}
    </div>
  )
}

export default AppWrapper
