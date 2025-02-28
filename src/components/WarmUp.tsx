"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faDumbbell } from "@fortawesome/free-solid-svg-icons"

const WarmUp: React.FC = () => {
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

  const warmUpExercises = [
    {
      name: "Dynamic Stretching",
      description: "Enhance flexibility and prepare muscles for exercise.",
      benefits: ["Improves range of motion", "Reduces injury risk", "Preps muscles"],
      image: "https://source.unsplash.com/featured/?stretching",
    },
    {
      name: "Arm Circles",
      description: "Loosen up shoulders and arms with circular motions.",
      benefits: ["Increases shoulder mobility", "Activates arm muscles", "Boosts blood flow"],
      image: "https://source.unsplash.com/featured/?armworkout",
    },
    {
      name: "Leg Swings",
      description: "Improve hip mobility and balance with controlled leg swings.",
      benefits: ["Enhances hip flexibility", "Improves balance", "Preps legs"],
      image: "https://source.unsplash.com/featured/?legs",
    },
    {
      name: "Jumping Jacks",
      description: "Elevate your heart rate with this classic warm-up.",
      benefits: ["Boosts cardiovascular system", "Increases endurance", "Full body activation"],
      image: "https://source.unsplash.com/featured/?jumpingjacks",
    },
    {
      name: "High Knees",
      description: "Engage your core and legs to stimulate blood flow.",
      benefits: ["Strengthens core", "Improves coordination", "Warms up lower body"],
      image: "https://source.unsplash.com/featured/?highknees",
    },
    {
      name: "Butt Kicks",
      description: "Activate your hamstrings and increase leg speed.",
      benefits: ["Activates hamstrings", "Enhances coordination", "Preps muscles"],
      image: "https://source.unsplash.com/featured/?buttkicks",
    },
    {
      name: "Foam Rolling",
      description: "Relieve muscle tension and enhance recovery.",
      benefits: ["Reduces soreness", "Improves circulation", "Boosts flexibility"],
      image: "https://source.unsplash.com/featured/?foamrolling",
    },
    {
      name: "Hip Openers",
      description: "Loosen tight hips and reduce lower back tension.",
      benefits: ["Increases hip mobility", "Reduces tightness", "Preps hips"],
      image: "https://source.unsplash.com/featured/?hipstretches",
    },
    {
      name: "Shoulder Shrugs",
      description: "Loosen neck and shoulder tension for better posture.",
      benefits: ["Relieves tension", "Improves mobility", "Preps upper body"],
      image: "https://source.unsplash.com/featured/?shoulders",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white font-bebas pt-20 px-4">
      <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/main")}
              className="mb-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Main Content
            </motion.button>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Warm-Up Exercises</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Prepare your body for intense workouts with dynamic warm-up exercises designed to boost mobility and prevent injury.
        </p>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warmUpExercises.map((exercise, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{exercise.name}</h2>
            <p className="mb-2 text-gray-400">{exercise.description}</p>
            <ul className="list-disc list-inside flex-1 text-sm text-gray-300">
              {exercise.benefits.map((benefit, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Remember, a proper warm-up is essential for optimal performance and injury prevention. Embrace the futuristic fitness journey and become independent of a personal trainer!
        </p>
      </div>
    </div>
  )
}

export default WarmUp
