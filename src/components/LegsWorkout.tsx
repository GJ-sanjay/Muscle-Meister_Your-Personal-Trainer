"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faArrowLeft,
  faDumbbell,
  faFire,
  faWeightHanging,
  faCube,
  faHandFist,
  faTachometerAlt,
  faArrowsAltV,
  faBalanceScale,
  faBolt,
  faShieldAlt,
  faGripVertical,
  faWaveSquare,
  faMagnet,
  faFistRaised,
  faAnchor,
  faSpider,
  faHand,
  faRing
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const exercises = [
  {
    name: "Barbell Back Squats",
    description: "Bar positioned on traps, feet shoulder-width. Break at hips first, lower until thighs parallel.",
    sets: 4,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Keep chest up", "Engage core", "Drive through heels"],
    icon: faWeightHanging
  },
  {
    name: "Front Squats",
    description: "Bar in front rack position. Elbows high, descend with upright torso.",
    sets: 4,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Maintain upright posture", "Engage upper back", "Control descent"],
    icon: faCube
  },
  {
    name: "Romanian Deadlifts",
    description: "Micro-bent knees, hinge hips back. Lower bar along legs until hamstrings stretch.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Keep bar close to body", "Maintain neutral spine", "Squeeze glutes at top"],
    icon: faHandFist
  },
  {
    name: "Leg Press",
    description: "Feet shoulder-width on platform. Lower until knees form 90° angle.",
    sets: 4,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Full range of motion", "Don't lock knees", "Control eccentric"],
    icon: faTachometerAlt
  },
  {
    name: "Walking Lunges",
    description: "Step forward, lower until both knees form 90°. Drive through front heel.",
    sets: 3,
    reps: "12 each leg",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Maintain upright torso", "Engage core", "Don't let knee cave in"],
    icon: faArrowsAltV
  },
  {
    name: "Bulgarian Split Squats",
    description: "Rear foot elevated on bench. Lower until front thigh parallel.",
    sets: 3,
    reps: "10 each leg",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Keep knee aligned", "Push through mid-foot", "Maintain balance"],
    icon: faBalanceScale
  },
  {
    name: "Leg Extensions",
    description: "Adjust pad above ankles. Extend legs fully, squeeze quads at top.",
    sets: 4,
    reps: "15-20",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Pause at contraction", "Slow eccentric", "Avoid swinging"],
    icon: faBolt
  },
  {
    name: "Stiff-Leg Deadlifts",
    description: "Near-locked knees, hinge at hips. Lower bar to mid-shin level.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Maintain hamstring tension", "Keep bar close", "No rounding back"],
    icon: faShieldAlt
  },
  {
    name: "Hack Squats",
    description: "Feet shoulder-width on platform. Lower until thighs parallel.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Press through whole foot", "Keep back flat", "Controlled movement"],
    icon: faGripVertical
  },
  {
    name: "Step-Ups",
    description: "Use knee-height box. Drive through heel to step up.",
    sets: 3,
    reps: "10 each leg",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Focus on form", "Avoid pushing off back leg", "Full extension at top"],
    icon: faWaveSquare
  },
  {
    name: "Glute Bridges",
    description: "Lie with knees bent, drive hips up. Squeeze glutes at top.",
    sets: 4,
    reps: "15-20",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Pause at top", "Engage core", "Don't hyperextend"],
    icon: faMagnet
  },
  {
    name: "Sumo Squats",
    description: "Wide stance with toes out. Lower until thighs parallel.",
    sets: 4,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Push through heels", "Keep knees tracking", "Upright torso"],
    icon: faFistRaised
  },
  {
    name: "Leg Curls",
    description: "Lie prone, ankles under pad. Curl legs to 90°, squeeze hamstrings.",
    sets: 4,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Full range of motion", "Squeeze at top", "Control negative"],
    icon: faAnchor
  },
  {
    name: "Calf Raises",
    description: "Stand on edge of step. Raise onto toes, pause at top.",
    sets: 5,
    reps: "20-25",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Full stretch at bottom", "Pause at peak", "Use slow tempo"],
    icon: faSpider
  },
  {
    name: "Box Jumps",
    description: "Stand facing knee-height box. Swing arms, explode onto box.",
    sets: 4,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Land softly", "Use arm swing", "Explosive movement"],
    icon: faFire
  },
  {
    name: "Goblet Squats",
    description: "Hold dumbbell at chest. Squat deep, elbows inside knees.",
    sets: 3,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Maintain upright posture", "Engage core", "Full depth"],
    icon: faDumbbell
  },
  {
    name: "Sissy Squats",
    description: "Hold support, lean back 45°. Lower until knees near floor.",
    sets: 3,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Controlled movement", "Focus on quads", "Use assistance if needed"],
    icon: faHand
  },
  {
    name: "Wall Sits",
    description: "Back flat against wall, knees 90°. Maintain position.",
    sets: 3,
    reps: "45-60sec",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Breathe deeply", "Engage quads", "Progressive time increase"],
    icon: faRing
  },
  {
    name: "Pistol Squats",
    description: "Extend one leg forward. Lower on standing leg.",
    sets: 3,
    reps: "6-8 each leg",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Use assistance if needed", "Maintain balance", "Controlled descent"],
    icon: faCube
  },
  {
    name: "Jump Squats",
    description: "Squat to parallel, explode upward. Land softly.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Soft landing", "Explosive upward", "Maintain form"],
    icon: faBolt
  },
]

const LegsWorkout: React.FC = () => {
  const navigate = useNavigate()

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 text-white font-bebas pt-20 px-4 pb-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/main")}
          className="mb-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Main Content
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-3 md:mb-4">
            Legendary Leg Development
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Build powerful quads, hamstrings, and calves with professional training protocols
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {exercises.map((exercise) => (
            <motion.article
              key={exercise.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-60">
                <img
                  src={`${exercise.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={exercise.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon 
                    icon={exercise.icon} 
                    className="text-red-500 text-2xl mr-3" 
                  />
                  <h3 className="text-2xl font-bold">{exercise.name}</h3>
                </div>

                <p className="text-gray-300 mb-4 text-lg">{exercise.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-red-400 font-bold">Sets</p>
                    <p className="text-xl">{exercise.sets}</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-red-400 font-bold">Reps</p>
                    <p className="text-xl">{exercise.reps}</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faFire} className="mr-2" />
                    Pro Tips
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {exercise.tips.map((tip, i) => (
                      <li key={i} className="text-gray-300">{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LegsWorkout