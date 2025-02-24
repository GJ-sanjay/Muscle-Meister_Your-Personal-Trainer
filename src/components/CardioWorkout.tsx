"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faFire,
  faRunning,
  faBiking,
  faSwimmer,
  faStopwatch,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons"

const CardioWorkout: React.FC = () => {
  const navigate = useNavigate()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-bebas pt-20 px-4">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/")}
        className="mb-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to Main Content
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Cardio Workouts</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transform your cardiovascular fitness with our specially designed workouts. Choose from various intensity
          levels and workout styles.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {cardioWorkouts.map((workout, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
            <FontAwesomeIcon icon={workout.icon} className="text-3xl text-red-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">{workout.name}</h2>
            <p className="mb-4 text-gray-400">{workout.description}</p>
            <div className="space-y-2">
              {workout.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <FontAwesomeIcon icon={faFire} className="text-red-500 mr-2" />
                  {benefit}
                </motion.div>
              ))}
            </div>
            {workout.duration && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-sm text-gray-400">Duration: {workout.duration}</span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const cardioWorkouts = [
  {
    name: "High-Intensity Interval Training (HIIT)",
    description: "Alternating periods of intense exercise with periods of rest or low-intensity exercise.",
    benefits: ["Burns calories quickly", "Improves cardiovascular health", "Increases metabolism"],
    duration: "20-30 minutes",
    icon: faStopwatch,
  },
  {
    name: "Running",
    description: "A classic cardio workout that can be done outdoors or on a treadmill.",
    benefits: ["Improves endurance", "Strengthens legs", "Reduces stress"],
    duration: "30-45 minutes",
    icon: faRunning,
  },
  {
    name: "Cycling",
    description: "Low-impact cardio that can be done on a stationary bike or outdoors.",
    benefits: ["Builds leg strength", "Improves joint mobility", "Low impact on joints"],
    duration: "45-60 minutes",
    icon: faBiking,
  },
  {
    name: "Swimming",
    description: "Full-body workout that's easy on the joints.",
    benefits: ["Works entire body", "Improves lung capacity", "Low impact on joints"],
    duration: "30-45 minutes",
    icon: faSwimmer,
  },
  {
    name: "Circuit Training",
    description: "Combination of cardio and strength exercises performed in succession.",
    benefits: ["Full body workout", "Improves strength and endurance", "Highly efficient"],
    duration: "40-50 minutes",
    icon: faDumbbell,
  },
  {
    name: "Tabata Training",
    description: "High-intensity workout with 20 seconds of work followed by 10 seconds of rest.",
    benefits: ["Maximum intensity", "Time efficient", "Improves power and speed"],
    duration: "20 minutes",
    icon: faFire,
  },
]

export default CardioWorkout

