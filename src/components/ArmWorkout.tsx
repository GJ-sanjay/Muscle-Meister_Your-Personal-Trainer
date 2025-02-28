"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faArrowLeft,
  faDumbbell,
  faFire,
  faHandFist,
  faBolt,
  faWeightHanging,
  faWaveSquare,
  faShieldAlt,
  faMagnet,
  faTachometerAlt,
  faRing,
  faAnchor,
  faHand,
  faGripVertical,
  faCube,
  faBalanceScale,
  faFistRaised,
  faArrowsAltV,
  faSpider
} from "@fortawesome/free-solid-svg-icons"

const ArmWorkout: React.FC = () => {
  const navigate = useNavigate()

  const exercises = [
    {
      name: "Spider Curls",
      description: "Isolated bicep peak builder using incline bench",
      reps: "12-15",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["Keep elbows fixed", "Full stretch at bottom", "Squeeze at top"],
      icon: faSpider
    },
    {
      name: "Weighted Chin-Ups",
      description: "Advanced compound back/bicep movement",
      reps: "6-8",
      sets: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Add weight belt", "Full range of motion", "Lean back slightly"],
      icon: faAnchor
    },
    {
      name: "Zottman Curls",
      description: "Forearm-focused rotational curls",
      reps: "10-12",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Pronate on descent", "Supinate on ascent", "Control rotation"],
      icon: faGripVertical
    },
    {
      name: "Close-Grip Bench",
      description: "Tricep-dominant pressing movement",
      reps: "8-10",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Elbows tucked", "Bar to lower chest", "Full lockout"],
      icon: faFistRaised
    },
    {
      name: "Cross Body Hammer Curls",
      description: "Brachiialis and forearm development",
      reps: "12 each arm",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["Across body path", "Control negative", "Squeeze at peak"],
      icon: faArrowsAltV
    },
    {
      name: "Overhead Tricep Extension",
      description: "Long head tricep isolation",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Keep elbows in", "Full stretch overhead", "No shoulder involvement"],
      icon: faCube
    },
    {
      name: "Preacher Curls",
      description: "Strict bicep isolation",
      reps: "10-15",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["Adjust pad height", "Control eccentric", "No momentum"],
      icon: faBalanceScale
    },
    {
      name: "Diamond Push-Ups",
      description: "Bodyweight tricep blaster",
      reps: "15-20",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Hands form diamond", "Elbows tucked", "Full range"],
      icon: faRing
    },
    {
      name: "Concentration Curls",
      description: "Peak contraction focus",
      reps: "12 each arm",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Elbow inside thigh", "Hold peak contraction", "Strict form"],
      icon: faHand
    },
    {
      name: "JM Press",
      description: "Hybrid press/extension for triceps",
      reps: "8-10",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Elbows forward", "Bar to forehead", "Drive through elbows"],
      icon: faBolt
    },
    {
      name: "Reverse Curls",
      description: "Forearm and brachialis focus",
      reps: "12-15",
      sets: 3,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Supinated grip", "Full wrist extension", "Slow tempo"],
      icon: faShieldAlt
    },
    {
      name: "Tate Press",
      description: "Tricep isolation with dumbbells",
      reps: "12-15",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["Elbows flared", "Press in arc motion", "Squeeze at top"],
      icon: faWaveSquare
    },
    {
      name: "21s Curls",
      description: "Time-under-tension bicep builder",
      reps: "21",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["7 partial bottom", "7 partial top", "7 full range"],
      icon: faTachometerAlt
    },
    {
      name: "Cable Rope Pushdowns",
      description: "Tricep isolation with constant tension",
      reps: "15-20",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Lean forward slightly", "Elbows glued to sides", "Full extension"],
      icon: faMagnet
    },
    {
      name: "Incline Dumbbell Curls",
      description: "Long bicep head emphasis",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["45° bench angle", "Full stretch at bottom", "Rotate palms up"],
      icon: faWeightHanging
    },
    {
      name: "Floor Skull Crushers",
      description: "Tricep builder with safety focus",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Elbows at 45°", "Stop at forehead", "No shoulder drift"],
      icon: faFire
    },
    {
      name: "Plate Pinch Curls",
      description: "Grip strength and forearm development",
      reps: "10-12",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["Pinch weight plates", "Full supination", "Slow negatives"],
      icon: faGripVertical
    },
    {
      name: "Lying Tricep Extensions",
      description: "Full tricep stretch and contraction",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Behind head stretch", "Elbows fixed", "Squeeze at top"],
      icon: faCube
    },
    {
      name: "Reverse Grip Pushdowns",
      description: "Target tricep medial head",
      reps: "15-20",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Underhand grip", "Full extension", "Constant tension"],
      icon: faArrowsAltV
    },
    {
      name: "Drag Curls",
      description: "Bicep-focused minimal shoulder involvement",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Keep bar close to body", "Elbows back", "Squeeze at top"],
      icon: faHandFist
    }
  ]

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
            Elite Arm Annihilators
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Forge 3D biceps, horseshoe triceps, and steel cable forearms
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

export default ArmWorkout