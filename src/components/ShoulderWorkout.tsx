"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faArrowLeft,
  faDumbbell,
  faFire,
  faAtlas,
  faBullseye,
  faRocket,
  faBalanceScale,
  faShieldAlt,
  faRing,
  faAngleDoubleUp,
  faCrosshairs,
  faFistRaised,
  faArrowsAltV,
  faCube,
  faThumbsUp,
  faHandHolding,
  faWaveSquare,
  faMountain,
  faStar
} from "@fortawesome/free-solid-svg-icons"

const ShoulderWorkout: React.FC = () => {
  const navigate = useNavigate()

  const exercises = [
    {
      name: "Push Press",
      description: "Explosive overhead movement with leg drive",
      reps: "6-8",
      sets: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Dip and drive", "Fast hip extension", "Lockout overhead"],
      icon: faAngleDoubleUp
    },
    {
      name: "Bradford Press",
      description: "3D shoulder development pattern",
      reps: "8-10",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Front to back path", "Full ROM", "Control weight"],
      icon: faArrowsAltV
    },
    {
      name: "Cuban Press",
      description: "Rotator cuff strengthener",
      reps: "12-15",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["External rotation focus", "Light weight", "Slow tempo"],
      icon: faCube
    },
    {
      name: "Seated Dumbbell Press",
      description: "Pure overhead strength builder",
      reps: "8-10",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Full ROM", "Palms facing", "Squeeze at top"],
      icon: faThumbsUp
    },
    {
      name: "Bent-Over Lateral Raises",
      description: "Posterior delt isolation",
      reps: "12-15",
      sets: 4,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Bend 45° forward", "Squeeze rear delts", "No momentum"],
      icon: faCrosshairs
    },
    {
      name: "Upright Rows",
      description: "Trap and medial delt developer",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["Close grip", "Lead with elbows", "Control descent"],
      icon: faRing
    },
    {
      name: "Landmine Press",
      description: "Shoulder-friendly overhead variation",
      reps: "8-10/side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Arc pressing path", "Engage core", "Full extension"],
      icon: faFistRaised
    },
    {
      name: "Scaption Raises",
      description: "Natural shoulder plane movement",
      reps: "12-15",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["30° angle raise", "Thumbs up position", "Squeeze at top"],
      icon: faStar
    },
    {
      name: "Single-Arm Cable Raises",
      description: "Constant tension isolation",
      reps: "12-15/side",
      sets: 4,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["Multiple angles", "Full stretch", "Slow negatives"],
      icon: faHandHolding
    },
    {
      name: "Behind-the-Neck Press",
      description: "Advanced overhead variation",
      reps: "8-10",
      sets: 3,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Light weight", "Control descent", "Mobile shoulders only"],
      icon: faMountain
    },
    {
      name: "Lateral Raise Complex",
      description: "3-position medial delt blast",
      reps: "10-10-10",
      sets: 3,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Front/middle/rear angles", "No rest between positions", "Burnout set"],
      icon: faWaveSquare
    },
    {
      name: "Face Pulls",
      description: "Rear delt and rotator cuff focus",
      reps: "15-20",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["External rotation", "Squeeze shoulder blades", "Rope attachment"],
      icon: faBullseye
    },
    {
      name: "Arnold Press",
      description: "360° shoulder development",
      reps: "10-12",
      sets: 4,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Rotational movement", "Full ROM", "Control weight"],
      icon: faShieldAlt
    },
    {
      name: "Overhead Carry",
      description: "Functional shoulder stability",
      reps: "40m walk",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Lockout position", "Engage core", "Slow controlled walk"],
      icon: faDumbbell
    },
    {
      name: "Lateral Raise Drop Set",
      description: "Medial delt burnout",
      reps: "15-12-10",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["Decrease weight each set", "No rest between sets", "Full ROM"],
      icon: faBalanceScale
    },
    {
      name: "Handstand Push-Ups",
      description: "Bodyweight shoulder builder",
      reps: "6-8",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Use wall support", "Partial ROM if needed", "Engage core"],
      icon: faRocket
    },
    {
      name: "Reverse Pec Deck",
      description: "Isolated rear delt work",
      reps: "12-15",
      sets: 4,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Chest against pad", "Squeeze shoulder blades", "Slow tempo"],
      icon: faCrosshairs
    },
    {
      name: "Clean and Press",
      description: "Full-body shoulder developer",
      reps: "5-6",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009137162-1c376a901979",
      tips: ["Explosive clean", "Strong press", "Full extension"],
      icon: faAtlas
    },
    {
      name: "Lateral Raise Iso-Hold",
      description: "Time-under-tension",
      reps: "30sec hold",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Arms parallel to floor", "Maintain form", "Breathe through hold"],
      icon: faFire
    },
    {
      name: "Plate Front Raises",
      description: "Anterior delt focus",
      reps: "12-15",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Grip plate edges", "Slow negatives", "No momentum"],
      icon: faRing
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
            Menace Shoulder Shredder
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Forge 3D Delts and Boulder Shoulders
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

export default ShoulderWorkout