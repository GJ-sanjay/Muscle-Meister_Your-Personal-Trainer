"use client"

import React from "react"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
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
          Transform your cardiovascular fitness with our specially designed workouts. Choose from various intensity levels and workout styles.
        </p>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardioWorkouts.map((workout, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
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
    description: "Alternate intense bursts with periods of rest.",
    benefits: ["Burns calories quickly", "Boosts metabolism", "Improves cardiovascular health"],
    duration: "20-30 minutes",
    icon: faStopwatch,
  },
  {
    name: "Running",
    description: "A classic outdoor or treadmill workout.",
    benefits: ["Enhances endurance", "Strengthens legs", "Reduces stress"],
    duration: "30-45 minutes",
    icon: faRunning,
  },
  {
    name: "Cycling",
    description: "Low-impact exercise on a stationary bike or outdoors.",
    benefits: ["Builds leg strength", "Improves joint mobility", "Low impact"],
    duration: "45-60 minutes",
    icon: faBiking,
  },
  {
    name: "Swimming",
    description: "Full-body workout that's gentle on joints.",
    benefits: ["Improves lung capacity", "Works entire body", "Low impact"],
    duration: "30-45 minutes",
    icon: faSwimmer,
  },
  {
    name: "Circuit Training",
    description: "Combine cardio and strength exercises in succession.",
    benefits: ["Full body workout", "Enhances endurance", "Highly efficient"],
    duration: "40-50 minutes",
    icon: faDumbbell,
  },
  {
    name: "Tabata Training",
    description: "20 seconds of work followed by 10 seconds of rest.",
    benefits: ["Max intensity", "Time efficient", "Boosts power"],
    duration: "20 minutes",
    icon: faFire,
  },
  {
    name: "Jump Rope",
    description: "Quick and portable cardio to improve coordination.",
    benefits: ["Enhances coordination", "Boosts endurance", "Burns calories"],
    duration: "10-15 minutes",
    icon: faRunning,
  },
  {
    name: "Stair Climbing",
    description: "Strengthen legs and glutes by climbing stairs.",
    benefits: ["Builds leg strength", "Enhances stamina", "Burns calories"],
    duration: "15-20 minutes",
    icon: faDumbbell,
  },
  {
    name: "Elliptical Training",
    description: "Low-impact workout that simulates running.",
    benefits: ["Low impact", "Full body engagement", "Improves fitness"],
    duration: "20-30 minutes",
    icon: faBiking,
  },
  {
    name: "Rowing",
    description: "Full-body cardio that enhances endurance.",
    benefits: ["Works upper & lower body", "Improves posture", "Boosts stamina"],
    duration: "20-30 minutes",
    icon: faStopwatch,
  },
]

export default CardioWorkout
