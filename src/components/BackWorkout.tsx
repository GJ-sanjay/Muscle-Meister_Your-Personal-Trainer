"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faDumbbell } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const exercises = [
  {
    name: "Lat Pulldowns",
    description: "Sit with thighs under pad, grip bar wider than shoulders. Lean back slightly, pull bar to chest while squeezing shoulder blades. Slowly return to start position.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Barbell Rows",
    description: "Hinge at hips 45°, grip bar slightly wider than legs. Pull bar to lower ribs, squeeze back muscles. Lower with control, maintain neutral spine throughout.",
    sets: "4",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Deadlifts",
    description: "Stand with mid-foot under bar. Hinge hips back, grip bar shoulder-width. Drive through heels, stand tall squeezing glutes. Lower bar with control, keep back flat.",
    sets: "4",
    reps: "6-8",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pull-Ups",
    description: "Grip bar wider than shoulders, hang with arms straight. Pull elbows down to sides until chin clears bar. Lower slowly, maintain tension in lats.",
    sets: "4",
    reps: "6-10",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "T-Bar Rows",
    description: "Stand straddling T-bar, hinge at hips. Pull handle to chest while keeping elbows close. Squeeze shoulder blades at top, lower with control.",
    sets: "4",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Seated Cable Rows",
    description: "Sit with knees slightly bent, grip handle. Pull to abdomen while keeping chest up. Squeeze back muscles, slowly return to stretch position.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Single-Arm Dumbbell Rows",
    description: "Place knee and hand on bench, flat back. Pull dumbbell to hip while keeping elbow close. Squeeze lat at top, lower with control.",
    sets: "3",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Face Pulls",
    description: "Set cable at eye level. Grip rope with thumbs up. Pull towards face while rotating hands to ears. Squeeze rear delts at end position.",
    sets: "3",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hyperextensions",
    description: "Secure feet on platform, hinge at hips. Lower torso until parallel to floor. Raise body using lower back muscles, squeeze glutes at top.",
    sets: "3",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Reverse Grip Lat Pulldowns",
    description: "Underhand grip slightly narrower than shoulders. Pull bar to upper chest while arching slightly. Focus on squeezing lats at bottom position.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chin-Ups",
    description: "Underhand grip shoulder-width apart. Pull up until chin clears bar. Lower with control, maintain tension through full range of motion.",
    sets: "4",
    reps: "6-10",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cable Straight Arm Pulldowns",
    description: "Grip bar with overhand grip, arms straight. Hinge slightly forward, pull bar down to thighs using lats. Slowly return to starting position.",
    sets: "3",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Inverted Rows",
    description: "Set bar at waist height. Lie underneath, grip bar wider than shoulders. Pull chest to bar while keeping body straight. Lower with control.",
    sets: "3",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rack Pulls",
    description: "Set bar at knee height. Grip shoulder-width, lift by extending hips. Squeeze glutes at top, lower bar back to pins with control.",
    sets: "4",
    reps: "6-8",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Landmine Rows",
    description: "Anchor barbell in landmine. Staggered stance, pull handle to hip. Keep elbow close, squeeze back at top. Alternate sides each set.",
    sets: "3",
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wide-Grip Seated Row",
    description: "Use wide handle attachment. Sit with knees bent, pull handle to lower ribs. Squeeze shoulder blades together, return slowly.",
    sets: "4",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Reverse Flyes",
    description: "Bend over 45° with dumbbells. Raise arms to sides with elbows slightly bent. Squeeze shoulder blades together at top position.",
    sets: "3",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Deadstop Rows",
    description: "Start with barbell on floor each rep. Pull to abdomen explosively, lower completely. Maintain strict form throughout movement.",
    sets: "4",
    reps: "6-8",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chest-Supported Rows",
    description: "Lie face down on incline bench. Pull dumbbells to hips while squeezing shoulder blades. Maintain chest contact throughout movement.",
    sets: "3",
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kroc Rows",
    description: "Use heavy dumbbell. Slight torso rotation allowed. Pull weight to hip explosively. Controlled eccentric phase.",
    sets: "3",
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]

const BackWorkout: React.FC = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-3 md:mb-4">Back Development Program</h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
          Professional back training protocol for thickness and width
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
              <span>{exercise.reps} Reps</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default BackWorkout