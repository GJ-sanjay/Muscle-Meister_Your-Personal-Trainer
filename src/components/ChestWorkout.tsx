"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import {faDumbbell } from "@fortawesome/free-solid-svg-icons"


const exercises = [
  {
    name: "Bench Press",
    description: "Lie on bench with eyes under bar. Grip slightly wider than shoulder-width. Unrack bar, lower to mid-chest, press up in straight line while driving feet into floor.",
    sets: "4",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Incline Bench Press",
    description: "Set bench to 45° angle. Grip bar slightly wider than shoulders. Lower bar to upper chest, press up while maintaining contact between hips and bench.",
    sets: "4",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Decline Bench Press",
    description: "Secure legs in decline bench. Grip bar wider than shoulder-width. Lower bar to lower chest, press upward while maintaining natural arch in back.",
    sets: "4",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1576678927484-cc9079570c76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dumbbell Flyes",
    description: "Lie flat on bench with dumbbells over chest. Slightly bend elbows, lower weights in wide arc until chest stretches. Bring back up in hugging motion.",
    sets: "3",
    reps: "10-15",
    image: "https://images.unsplash.com/photo-1580261450047-d34e04b9d7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cable Crossovers",
    description: "Set cable pulleys to highest position. Step forward with one foot, grip handles. Bring hands downward and across body in arc motion, squeezing chest at bottom.",
    sets: "3",
    reps: "10-15",
    image: "https://images.unsplash.com/photo-1532384816664-01b8b7238c1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chest Dips",
    description: "Grip parallel bars with palms facing in. Lean forward 30°, lower until elbows reach 90°. Push back up focusing on chest contraction, don't lock elbows at top.",
    sets: "3",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Push-Ups",
    description: "Hands slightly wider than shoulders. Maintain straight line from head to heels. Lower until chest touches floor, push up while squeezing chest muscles together.",
    sets: "3",
    reps: "15-20",
    image: "https://images.unsplash.com/photo-1605291567423-72d1cde110eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dumbbell Pullover",
    description: "Lie perpendicular on bench with only shoulders supported. Hold dumbbell with both hands overhead. Lower weight behind head until chest stretches, pull back to start.",
    sets: "3",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1596357395217-80de13137e5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Machine Chest Press",
    description: "Adjust seat so handles align with mid-chest. Grip handles, press forward until arms extended. Return slowly while maintaining tension in chest.",
    sets: "4",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pec Deck Flyes",
    description: "Sit with back flat against pad. Grip handles with elbows bent 90°. Bring arms together in front of chest, squeeze for 2 seconds, return with control.",
    sets: "3",
    reps: "10-15",
    image: "https://images.unsplash.com/photo-1576678924439-cc7838b372d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Incline Dumbbell Press",
    description: "Set bench to 30-45° angle. Press dumbbells up from shoulders, rotate palms forward. Lower until elbows form 90° angle, press up in triangular path.",
    sets: "4",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1579758663054-6d9e56a1c7c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Decline Dumbbell Press",
    description: "Secure legs in decline bench. Start dumbbells at lower chest. Press straight up, rotating palms to face forward. Lower with control, keeping elbows tucked.",
    sets: "4",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Standing Cable Fly",
    description: "Set cables to shoulder height. Stand centered with slight forward lean. Keep elbows slightly bent, bring handles together in front of chest. Return slowly.",
    sets: "3",
    reps: "10-15",
    image: "https://images.unsplash.com/photo-1532384816664-01b8b7238c1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Squeeze Press",
    description: "Use light dumbbells. Press weights together at chest level. Press upward while maintaining contact between dumbbells. Squeeze chest at top position.",
    sets: "3",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Floor Press",
    description: "Lie on floor with knees bent. Lower dumbbells until elbows touch floor. Press upward without locking elbows, maintain tension in chest throughout.",
    sets: "3",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1596357395217-80de13137e5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Landmine Press",
    description: "Anchor barbell in landmine. Stand staggered stance. Press weight upward at 45° angle, rotate torso slightly. Lower with control, keep core engaged.",
    sets: "3",
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1576678927484-cc9079570c76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Close-Grip Bench Press",
    description: "Grip bar with hands shoulder-width. Lower bar to lower chest. Press up while keeping elbows close to body. Focus on triceps and inner chest contraction.",
    sets: "3",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Reverse Grip Bench Press",
    description: "Use underhand grip slightly wider than shoulders. Lower bar to lower chest. Press up while maintaining wrist alignment. Keep elbows tucked throughout.",
    sets: "3",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1596357395217-80de13137e5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Medicine Ball Push-Ups",
    description: "Place hands on medicine balls. Maintain balance while lowering chest between balls. Push up explosively, keep core engaged throughout movement.",
    sets: "3",
    reps: "10-15",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Plyometric Push-Ups",
    description: "Start in push-up position. Lower quickly then explode upward, hands leaving floor. Land softly, immediately go into next rep. Use mat for wrist protection.",
    sets: "3",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1605291567423-72d1cde110eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]

const ChestWorkout: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-900 text-white font-bebas pt-20 px-4">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/main")}
        className="mb-6 bg-red-500 hover:bg-red-600 text-white text-sm md:text-base py-2 px-4 rounded-full inline-flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-3 md:mb-4">Chest Workout Guide</h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
          Professional coaching cues for perfect chest development
        </p>
      </motion.div>

      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } }}}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {exercises.map((exercise, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-4 shadow-lg overflow-hidden group"
          >
            <div className="relative">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-48 md:h-56 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>
            <h2 className="text-xl font-bold mb-2">{exercise.name}</h2>
            <p className="text-gray-300 text-sm md:text-base mb-4">{exercise.description}</p>
            <div className="flex justify-between text-xs md:text-sm bg-gray-700 p-2 md:p-3 rounded-lg">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faDumbbell} className="mr-2 text-red-500" />
                {exercise.sets} Sets
              </span>
              <span>{exercise.reps}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ChestWorkout