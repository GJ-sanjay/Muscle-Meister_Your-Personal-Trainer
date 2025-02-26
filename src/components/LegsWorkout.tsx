"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faDumbbell } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const exercises = [
  {
    name: "Barbell Back Squats",
    description: "Bar positioned on traps, feet shoulder-width. Break at hips first, lower until thighs parallel. Drive through heels, keep chest up throughout movement.",
    sets: "4",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Front Squats",
    description: "Bar in front rack position. Elbows high, descend with upright torso. Push through mid-foot, maintain core tension.",
    sets: "4",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Romanian Deadlifts",
    description: "Micro-bent knees, hinge hips back. Lower bar along legs until hamstrings stretch. Squeeze glutes to return, maintain neutral spine.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Leg Press",
    description: "Feet shoulder-width on platform. Lower until knees form 90° angle. Press through heels, don't lock knees at top.",
    sets: "4",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Walking Lunges",
    description: "Step forward, lower until both knees form 90°. Drive through front heel, alternate legs. Maintain upright torso.",
    sets: "3",
    reps: "12 each leg",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bulgarian Split Squats",
    description: "Rear foot elevated on bench. Lower until front thigh parallel. Keep knee aligned over ankle, push through mid-foot.",
    sets: "3",
    reps: "10 each leg",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Leg Extensions",
    description: "Adjust pad above ankles. Extend legs fully, squeeze quads at top. Lower slowly, maintain tension through range.",
    sets: "4",
    reps: "15-20",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stiff-Leg Deadlifts",
    description: "Near-locked knees, hinge at hips. Lower bar to mid-shin level. Squeeze hamstrings to return, keep bar close to body.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hack Squats",
    description: "Feet shoulder-width on platform. Lower until thighs parallel. Press through whole foot, emphasize quad contraction.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Step-Ups",
    description: "Use knee-height box. Drive through heel to step up. Control descent, maintain upright posture.",
    sets: "3",
    reps: "10 each leg",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Glute Bridges",
    description: "Lie with knees bent, drive hips up. Squeeze glutes at top. Lower with control, maintain core tension.",
    sets: "4",
    reps: "15-20",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sumo Squats",
    description: "Wide stance with toes out. Lower until thighs parallel. Push through heels, emphasize inner thigh engagement.",
    sets: "4",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Leg Curls",
    description: "Lie prone, ankles under pad. Curl legs to 90°, squeeze hamstrings. Lower with control, maintain hip contact.",
    sets: "4",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Calf Raises",
    description: "Stand on edge of step. Raise onto toes, pause at top. Lower below step level for full stretch.",
    sets: "5",
    reps: "20-25",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Box Jumps",
    description: "Stand facing knee-height box. Swing arms, explode onto box. Step down carefully between reps.",
    sets: "4",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Goblet Squats",
    description: "Hold dumbbell at chest. Squat deep, elbows inside knees. Drive through heels, keep torso upright.",
    sets: "3",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sissy Squats",
    description: "Hold support, lean back 45°. Lower until knees near floor. Use quads to return, keep heels elevated.",
    sets: "3",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wall Sits",
    description: "Back flat against wall, knees 90°. Maintain position, squeeze quads. Breathe deeply throughout hold.",
    sets: "3",
    reps: "45-60sec",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pistol Squats",
    description: "Extend one leg forward. Lower on standing leg. Use assistance if needed, maintain control.",
    sets: "3",
    reps: "6-8 each leg",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jump Squats",
    description: "Squat to parallel, explode upward. Land softly, immediately go into next rep. Use mat for impact reduction.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]

const LegsWorkout: React.FC = () => {
  const navigate = useNavigate()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
        onClick={() => navigate("/main")}
        className="mb-6 bg-red-500 hover:bg-red-600 text-white text-sm md:text-base py-2 px-4 rounded-full inline-flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to Main
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-3 md:mb-4">Complete Leg Development</h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
          Build powerful quads, hamstrings, and calves with professional training protocols
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {exercises.map((exercise, index) => (
          <motion.div
            key={index}
            variants={item}
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

export default LegsWorkout