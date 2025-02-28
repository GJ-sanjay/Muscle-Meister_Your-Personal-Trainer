"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faArrowLeft, 
  faDumbbell,
  faFire,
  faBalanceScale,
  faClock,
  faRunning,
  faHandPaper,
  faStar,
  faLeaf,
  faWaveSquare,
  faCube,
  faBullseye,
  faHeart,
  faFeather,
  faMountain,
  faRing,
  faHandHoldingHeart,
  faShieldAlt,
  faDragon,
  faRocket
} from "@fortawesome/free-solid-svg-icons"

const CoreWorkout: React.FC = () => {
  const navigate = useNavigate()

  const exercises = [
    {
      name: "Plank",
      description: "Full core engagement in static hold position",
      duration: "30-60 seconds",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Form straight line from head to heels", "Engage glutes and core", "Breathe deeply"],
      icon: faFire
    },
    {
      name: "Russian Twists",
      description: "Rotational exercise targeting obliques",
      reps: "20 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1596357395217-80de13130e92",
      tips: ["Keep feet elevated", "Maintain controlled motion", "Use weight for intensity"],
      icon: faBalanceScale
    },
    {
      name: "Dead Bug",
      description: "Supine core stabilization exercise",
      reps: "15 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1579750962763-6e5f37a5b65a",
      tips: ["Press lower back into floor", "Move slowly with control", "Exhale during exertion"],
      icon: faLeaf
    },
    {
      name: "Mountain Climbers",
      description: "Dynamic core and cardio movement",
      duration: "45 seconds",
      sets: 4,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Maintain plank position", "Drive knees to chest", "Increase speed gradually"],
      icon: faMountain
    },
    {
      name: "Hollow Body Hold",
      description: "Gymnastics-inspired core strengthener",
      duration: "20-30 seconds",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Press lower back to floor", "Extend arms overhead", "Engage deep core muscles"],
      icon: faCube
    },
    {
      name: "Bird Dog",
      description: "Anti-rotation core stability exercise",
      reps: "12 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1576675422768-0d4f1cac675c",
      tips: ["Maintain neutral spine", "Move slowly with control", "Focus on balance"],
      icon: faBullseye
    },
    {
      name: "Flutter Kicks",
      description: "Lower abdominal targeting movement",
      duration: "30 seconds",
      sets: 4,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Keep legs straight", "Maintain lower back contact", "Use controlled motion"],
      icon: faWaveSquare
    },
    {
      name: "Side Plank",
      description: "Oblique and lateral core challenge",
      duration: "20-40 seconds/side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["Stack feet and hips", "Lift hips high", "Engage side muscles"],
      icon: faShieldAlt
    },
    {
      name: "Bicycle Crunches",
      description: "Dynamic rotational core exercise",
      reps: "20 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Focus on rotation", "Keep elbows wide", "Don't pull on neck"],
      icon: faRocket
    },
    {
      name: "Reverse Crunches",
      description: "Lower abdominal focused movement",
      reps: 15,
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["Lift hips off floor", "Exhale during contraction", "Avoid momentum"],
      icon: faFeather
    },
    {
      name: "V-Ups",
      description: "Advanced full core activation",
      reps: 12,
      sets: 3,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Keep legs straight", "Reach fingertips to toes", "Control descent"],
      icon: faStar
    },
    {
      name: "Pallof Press",
      description: "Anti-rotation core stability",
      reps: "10 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1579750962763-6e5f37a5b65a",
      tips: ["Maintain neutral spine", "Resist rotation", "Use cable or band"],
      icon: faHandHoldingHeart
    },
    {
      name: "Dragon Flags",
      description: "Advanced core strength builder",
      reps: 8,
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Start with bent knees", "Engage entire core", "Use padding for support"],
      icon: faDragon
    },
    {
      name: "Hanging Leg Raises",
      description: "Advanced core and grip challenge",
      reps: 10,
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Avoid swinging", "Lift legs to 90°", "Engage scapular muscles"],
      icon: faRing
    },
    {
      name: "Ab Wheel Rollouts",
      description: "Full anterior core engagement",
      reps: 12,
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019614243-c4cb2e843b74",
      tips: ["Start from knees", "Maintain neutral spine", "Control movement"],
      icon: faCube
    },
    {
      name: "L-Sit Hold",
      description: "Static core and hip flexor challenge",
      duration: "15-30 seconds",
      sets: 4,
      image: "https://images.unsplash.com/photo-1576673258481-27ef08d1622e",
      tips: ["Elevate on parallettes", "Press through palms", "Engage quads"],
      icon: faHandPaper
    },
    {
      name: "Toe Touches",
      description: "Upper abdominal activation",
      reps: 20,
      sets: 3,
      image: "https://images.unsplash.com/photo-1579750962429-b6d1b7d42b2d",
      tips: ["Keep legs vertical", "Lift shoulder blades", "Exhale upward"],
      icon: faHeart
    },
    {
      name: "Windshield Wipers",
      description: "Oblique and rotational challenge",
      reps: "10 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      tips: ["Control rotation", "Keep shoulders down", "Modify range as needed"],
      icon: faShieldAlt
    },
    {
      name: "Sit-Up with Twist",
      description: "Dynamic core and oblique workout",
      reps: "15 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1596357395217-80de13130e92",
      tips: ["Add medicine ball", "Focus on rotation", "Control descent"],
      icon: faRocket
    },
    {
      name: "Plank to Push-Up",
      description: "Core stability with upper body challenge",
      reps: "10 each side",
      sets: 3,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
      tips: ["Maintain straight line", "Control transitions", "Engage entire core"],
      icon: faFire
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
          ShowStopper Core Crunchers
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
          Build complete core strength with this comprehensive workout collection
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
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {exercises.map((exercise, index) => (
            <motion.article
              key={exercise.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
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
                  {exercise.duration ? (
                    <div className="bg-gray-700 p-3 rounded-lg text-center">
                      <p className="text-red-400 font-bold">Duration</p>
                      <p className="text-xl">{exercise.duration}</p>
                    </div>
                  ) : (
                    <div className="bg-gray-700 p-3 rounded-lg text-center">
                      <p className="text-red-400 font-bold">Reps</p>
                      <p className="text-xl">{exercise.reps}</p>
                    </div>
                  )}
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faHandPaper} className="mr-2" />
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

export default CoreWorkout