"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faArrowLeft,
  faDumbbell,
  faFire,
  faAnchor,
  faCube,
  faHandFist,
  faBolt,
  faShieldAlt,
  faGripVertical,
  faWaveSquare,
  faMagnet,
  faFistRaised,
  faWeightHanging,
  faTachometerAlt,
  faArrowsAltV,
  faBalanceScale,
  faHand,
  faRing,
  faSpider
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const exercises = [
  {
    name: "Lat Pulldowns",
    description: "Sit with thighs under pad, grip bar wider than shoulders. Lean back slightly, pull bar to chest.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Squeeze shoulder blades", "Control eccentric", "Full stretch at top"],
    icon: faAnchor
  },
  {
    name: "Barbell Rows",
    description: "Hinge at hips 45°, grip bar slightly wider than legs. Pull bar to lower ribs.",
    sets: 4,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Maintain neutral spine", "Drive elbows back", "Pause at contraction"],
    icon: faCube
  },
  {
    name: "Deadlifts",
    description: "Stand with mid-foot under bar. Hinge hips back, grip bar shoulder-width.",
    sets: 4,
    reps: "6-8",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Drive through heels", "Keep bar close", "Engage lats"],
    icon: faHandFist
  },
  {
    name: "Pull-Ups",
    description: "Grip bar wider than shoulders, hang with arms straight. Pull until chin clears bar.",
    sets: 4,
    reps: "6-10",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Full range of motion", "Use bands if needed", "Slow negative"],
    icon: faBolt
  },
  {
    name: "T-Bar Rows",
    description: "Stand straddling T-bar, hinge at hips. Pull handle to chest keeping elbows close.",
    sets: 4,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Brace core", "Squeeze at top", "No momentum"],
    icon: faShieldAlt
  },
  {
    name: "Seated Cable Rows",
    description: "Sit with knees slightly bent, grip handle. Pull to abdomen keeping chest up.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Pause at contraction", "Stretch at extension", "Control tempo"],
    icon: faGripVertical
  },
  {
    name: "Single-Arm Dumbbell Rows",
    description: "Place knee and hand on bench, flat back. Pull dumbbell to hip.",
    sets: 3,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Elbow close to body", "Rotate at top", "Full stretch"],
    icon: faWaveSquare
  },
  {
    name: "Face Pulls",
    description: "Set cable at eye level. Grip rope with thumbs up. Pull towards face.",
    sets: 3,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["External rotation", "Squeeze rear delts", "Slow tempo"],
    icon: faMagnet
  },
  {
    name: "Hyperextensions",
    description: "Secure feet on platform, hinge at hips. Raise body using lower back muscles.",
    sets: 3,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Avoid hyperextension", "Engage glutes", "Control movement"],
    icon: faFistRaised
  },
  {
    name: "Reverse Grip Lat Pulldowns",
    description: "Underhand grip slightly narrower than shoulders. Pull bar to upper chest.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Arch slightly", "Squeeze lats", "Full stretch"],
    icon: faWeightHanging
  },
  {
    name: "Chin-Ups",
    description: "Underhand grip shoulder-width apart. Pull up until chin clears bar.",
    sets: 4,
    reps: "6-10",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Engage biceps", "Slow negative", "Full extension"],
    icon: faTachometerAlt
  },
  {
    name: "Cable Straight Arm Pulldowns",
    description: "Grip bar with overhand grip, arms straight. Pull bar down to thighs using lats.",
    sets: 3,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Keep arms straight", "Focus on lats", "Slow eccentric"],
    icon: faArrowsAltV
  },
  {
    name: "Inverted Rows",
    description: "Set bar at waist height. Lie underneath, grip bar wider than shoulders.",
    sets: 3,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Body straight line", "Chest to bar", "Control tempo"],
    icon: faBalanceScale
  },
  {
    name: "Rack Pulls",
    description: "Set bar at knee height. Grip shoulder-width, lift by extending hips.",
    sets: 4,
    reps: "6-8",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
    tips: ["Squeeze glutes", "Neutral spine", "Powerful lift"],
    icon: faHand
  },
  {
    name: "Landmine Rows",
    description: "Anchor barbell in landmine. Staggered stance, pull handle to hip.",
    sets: 3,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Alternate sides", "Elbow close", "Explosive pull"],
    icon: faRing
  },
  {
    name: "Wide-Grip Seated Row",
    description: "Use wide handle attachment. Pull handle to lower ribs.",
    sets: 4,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Squeeze shoulder blades", "Upright posture", "Full range"],
    icon: faSpider
  },
  {
    name: "Reverse Flyes",
    description: "Bend over 45° with dumbbells. Raise arms to sides with elbows slightly bent.",
    sets: 3,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Light weight", "Squeeze rear delts", "Controlled movement"],
    icon: faCube
  },
  {
    name: "Deadstop Rows",
    description: "Start with barbell on floor each rep. Pull to abdomen explosively.",
    sets: 4,
    reps: "6-8",
    image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
    tips: ["Reset each rep", "Explosive concentric", "Full stop"],
    icon: faBolt
  },
  {
    name: "Chest-Supported Rows",
    description: "Lie face down on incline bench. Pull dumbbells to hips.",
    sets: 3,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Eliminate momentum", "Squeeze at top", "Slow negative"],
    icon: faShieldAlt
  },
  {
    name: "Kroc Rows",
    description: "Use heavy dumbbell. Slight torso rotation allowed. Pull weight to hip.",
    sets: 3,
    reps: "12-15",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    tips: ["Progressive overload", "Controlled eccentric", "Brace core"],
    icon: faFistRaised
  },
]

const BackWorkout: React.FC = () => {
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
            Bazooka Back Development Program
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Professional back training protocol for thickness and width
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

export default BackWorkout