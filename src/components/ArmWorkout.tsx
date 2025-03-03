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
      image: "https://www.shutterstock.com/image-photo/asian-man-shirtless-workout-weight-600nw-2280545545.jpg",
      tips: ["Keep elbows fixed", "Full stretch at bottom", "Squeeze at top"],
      icon: faSpider
    },
    {
      name: "Weighted Chin-Ups",
      description: "Advanced compound back/bicep movement",
      reps: "6-8",
      sets: 4,
      image: "https://media.gettyimages.com/id/946365984/photo/strong-caucasian-woman-doing-pull-ups-in-a-fitness-gym.jpg?s=612x612&w=gi&k=20&c=ODUVHzaUD2TJzRhRmXO_VWkNAA-bZev9ejn16B9v1wg=",
      tips: ["Add weight belt", "Full range of motion", "Lean back slightly"],
      icon: faAnchor
    },
    {
      name: "Zottman Curls",
      description: "Forearm-focused rotational curls",
      reps: "10-12",
      sets: 3,
      image: "https://i.pinimg.com/736x/b1/90/51/b19051bd8618337f70cac42faf993b16.jpg",
      tips: ["Pronate on descent", "Supinate on ascent", "Control rotation"],
      icon: faGripVertical
    },
    {
      name: "Close-Grip Bench",
      description: "Tricep-dominant pressing movement",
      reps: "8-10",
      sets: 4,
      image: "https://www.shutterstock.com/image-illustration/closegrip-barbell-bench-press-3d-600nw-430936051.jpg",
      tips: ["Elbows tucked", "Bar to lower chest", "Full lockout"],
      icon: faFistRaised
    },
    {
      name: "Cross Body Hammer Curls",
      description: "Brachiialis and forearm development",
      reps: "12 each arm",
      sets: 3,
      image: "https://www.shutterstock.com/image-illustration/cross-body-hammer-curls-3d-260nw-419477203.jpg",
      tips: ["Across body path", "Control negative", "Squeeze at peak"],
      icon: faArrowsAltV
    },
    {
      name: "Overhead Tricep Extension",
      description: "Long head tricep isolation",
      reps: "10-12",
      sets: 4,
      image: "https://media.istockphoto.com/id/518525640/photo/triceps-overhead-extension-rope.jpg?s=612x612&w=0&k=20&c=gGsDgAVKeiRvvPAiGo6gKgW9uj5RqkL70dH9HxZmRsg=",
      tips: ["Keep elbows in", "Full stretch overhead", "No shoulder involvement"],
      icon: faCube
    },
    {
      name: "Preacher Curls",
      description: "Strict bicep isolation",
      reps: "10-15",
      sets: 4,
      image: "https://media.istockphoto.com/id/513435206/photo/handsome-man-lifting-weights-at-the-gym.jpg?s=612x612&w=0&k=20&c=7BH3FZOfWC11C7HL66uYbH4Py2sy6vicAoapEf9dzTY=",
      tips: ["Adjust pad height", "Control eccentric", "No momentum"],
      icon: faBalanceScale
    },
    {
      name: "Diamond Push-Ups",
      description: "Bodyweight tricep blaster",
      reps: "15-20",
      sets: 3,
      image: "https://www.shutterstock.com/image-illustration/diamond-pushup-3d-illustration-260nw-622379597.jpg",
      tips: ["Hands form diamond", "Elbows tucked", "Full range"],
      icon: faRing
    },
    {
      name: "Concentration Curls",
      description: "Peak contraction focus",
      reps: "12 each arm",
      sets: 3,
      image: "https://media.istockphoto.com/id/1049036796/photo/working-hard-for-healthy-body.jpg?s=612x612&w=0&k=20&c=x4uelM_u8OmoZPZeuPyQsoRrQ-5mKQ3YcuBqLOoAoDc=",
      tips: ["Elbow inside thigh", "Hold peak contraction", "Strict form"],
      icon: faHand
    },
    {
      name: "JM Press",
      description: "Hybrid press/extension for triceps",
      reps: "8-10",
      sets: 4,
      image: "https://weighttraining.guide/wp-content/uploads/2018/11/Barbell-JM-press-resized.png",
      tips: ["Elbows forward", "Bar to forehead", "Drive through elbows"],
      icon: faBolt
    },
    {
      name: "Reverse Curls",
      description: "Forearm and brachialis focus",
      reps: "12-15",
      sets: 3,
      image: "https://www.shutterstock.com/shutterstock/photos/1986762914/display_1500/stock-vector-man-doing-dumbbell-bicep-reverse-curls-exercise-flat-vector-illustration-isolated-on-white-1986762914.jpg",
      tips: ["Supinated grip", "Full wrist extension", "Slow tempo"],
      icon: faShieldAlt
    },
    {
      name: "Tate Press",
      description: "Tricep isolation with dumbbells",
      reps: "12-15",
      sets: 4,
      image: "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/12/Dumbbell-Tate-Press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4",
      tips: ["Elbows flared", "Press in arc motion", "Squeeze at top"],
      icon: faWaveSquare
    },
    {
      name: "21s Curls",
      description: "Time-under-tension bicep builder",
      reps: "21",
      sets: 3,
      image: "https://www.setforset.com/cdn/shop/articles/bicep_21s_2000x.jpg?v=1637131104",
      tips: ["7 partial bottom", "7 partial top", "7 full range"],
      icon: faTachometerAlt
    },
    {
      name: "Cable Rope Pushdowns",
      description: "Tricep isolation with constant tension",
      reps: "15-20",
      sets: 4,
      image: "https://t4.ftcdn.net/jpg/02/80/96/09/360_F_280960931_nObdxEXR5av6J33ZliqDArVOcRq2mnrP.jpg",
      tips: ["Lean forward slightly", "Elbows glued to sides", "Full extension"],
      icon: faMagnet
    },
    {
      name: "Incline Dumbbell Curls",
      description: "Long bicep head emphasis",
      reps: "10-12",
      sets: 4,
      image: "https://www.shutterstock.com/image-illustration/start-end-position-digital-athletic-260nw-372766684.jpg",
      tips: ["45° bench angle", "Full stretch at bottom", "Rotate palms up"],
      icon: faWeightHanging
    },
    {
      name: "Floor Skull Crushers",
      description: "Tricep builder with safety focus",
      reps: "10-12",
      sets: 4,
      image: "https://hips.hearstapps.com/hmg-prod/images/701/thumb-floorskullcrushertriset-1510090317.png",
      tips: ["Elbows at 45°", "Stop at forehead", "No shoulder drift"],
      icon: faFire
    },
    {
      name: "Plate Pinch Curls",
      description: "Grip strength and forearm development",
      reps: "10-12",
      sets: 3,
      image: "https://liftmanual.com/wp-content/uploads/2023/04/plate-pinch.jpg",
      tips: ["Pinch weight plates", "Full supination", "Slow negatives"],
      icon: faGripVertical
    },
    {
      name: "Lying Tricep Extensions",
      description: "Full tricep stretch and contraction",
      reps: "10-12",
      sets: 4,
      image: "https://media.istockphoto.com/id/1338892778/photo/an-athletic-asian-male-does-a-set-of-lying-tricep-extensions-also-known-as-skull-crushers.jpg?s=1024x1024&w=is&k=20&c=53y7V1pBbwnuka_l0_f0HtnUh-CrqTpFBByyY-Ao0sQ=",
      tips: ["Behind head stretch", "Elbows fixed", "Squeeze at top"],
      icon: faCube
    },
    {
      name: "Reverse Grip Pushdowns",
      description: "Target tricep medial head",
      reps: "15-20",
      sets: 3,
      image: "https://anabolicaliens.com/cdn/shop/articles/5fb55f667f160c562e9e4172_reverse-grip-tricep-pushdown.png?v=1641751032",
      tips: ["Underhand grip", "Full extension", "Constant tension"],
      icon: faArrowsAltV
    },
    {
      name: "Drag Curls",
      description: "Bicep-focused minimal shoulder involvement",
      reps: "10-12",
      sets: 4,
      image: "https://fitliferegime.com/wp-content/uploads/2023/02/Dumbbell-Drag-Curl.jpg",
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
