"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faArrowLeft,
  faDumbbell,
  faFire,
  faWeightHanging,
  faTachometerAlt,
  faArrowsAltV,
  faBalanceScale,
  faBolt,
  faShieldAlt,
  faGripVertical,
  faWaveSquare,
  faMagnet,
  faFistRaised,
  faCube,
  faHand,
  faRing,
  faSpider,
  faAnchor
} from "@fortawesome/free-solid-svg-icons"

const exercises = [
  {
    name: "Bench Press",
    description: "Lie on bench with eyes under bar. Grip slightly wider than shoulder-width.",
    sets: 4,
    reps: "8-12",
    image: "https://www.trainheroic.com/wp-content/uploads/2023/07/23076-TH-Blog-2400px-jpg.webp",
    tips: ["Arch back slightly", "Drive through heels", "Touch mid-chest"],
    icon: faWeightHanging
  },
  {
    name: "Incline Bench Press",
    description: "Set bench to 45° angle. Grip bar slightly wider than shoulders.",
    sets: 4,
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
    tips: ["Upper chest focus", "Maintain hip contact", "Control eccentric"],
    icon: faTachometerAlt
  },
  {
    name: "Decline Bench Press",
    description: "Secure legs in decline bench. Grip bar wider than shoulder-width.",
    sets: 4,
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1576678927484-cc9079570c76",
    tips: ["Lower chest emphasis", "Natural arch maintained", "Full lockout"],
    icon: faArrowsAltV
  },
  {
    name: "Dumbbell Flyes",
    description: "Lie flat on bench with dumbbells over chest. Slightly bend elbows.",
    sets: 3,
    reps: "10-15",
    image: "https://st4.depositphotos.com/1662991/20870/i/450/depositphotos_208709192-stock-photo-side-view-female-client-doing.jpg",
    tips: ["Maintain chest stretch", "Hugging motion", "Constant tension"],
    icon: faBalanceScale
  },
  {
    name: "Cable Crossovers",
    description: "Set cable pulleys to highest position. Step forward with one foot.",
    sets: 3,
    reps: "10-15",
    image: "https://www.shutterstock.com/image-photo/sporty-woman-exercising-on-multistation-600nw-2180444683.jpg",
    tips: ["Squeeze at bottom", "Control resistance", "Stretch at top"],
    icon: faBolt
  },
  {
    name: "Chest Dips",
    description: "Grip parallel bars with palms facing in. Lean forward 30°.",
    sets: 3,
    reps: "8-12",
    image: "https://www.dmoose.com/cdn/shop/articles/Chest_Dips.jpg?v=1654276876",
    tips: ["Chest forward", "Full range of motion", "No swinging"],
    icon: faShieldAlt
  },
  {
    name: "Push-Ups",
    description: "Hands slightly wider than shoulders. Maintain straight line.",
    sets: 3,
    reps: "15-20",
    image: "https://images.unsplash.com/photo-1605291567423-72d1cde110eb",
    tips: ["Chest to floor", "Engage core", "Explosive push"],
    icon: faGripVertical
  },
  {
    name: "Dumbbell Pullover",
    description: "Lie perpendicular on bench with only shoulders supported.",
    sets: 3,
    reps: "10-12",
    image: "https://www.shutterstock.com/image-vector/woman-doing-dumbbell-pullover-exercise-600nw-2085415906.jpg",
    tips: ["Stretch lats", "Controlled movement", "Hip stability"],
    icon: faWaveSquare
  },
  {
    name: "Machine Chest Press",
    description: "Adjust seat so handles align with mid-chest. Grip handles.",
    sets: 4,
    reps: "8-12",
    image: "https://st2.depositphotos.com/6644020/11603/i/450/depositphotos_116038932-stock-photo-woman-exercising-chest-press-workout.jpg",
    tips: ["Full extension", "Slow negative", "Mind-muscle connection"],
    icon: faMagnet
  },
  {
    name: "Pec Deck Flyes",
    description: "Sit with back flat against pad. Grip handles with elbows bent 90°.",
    sets: 3,
    reps: "10-15",
    image: "https://blog.myarsenalstrength.com/hs-fs/hubfs/whats-the-difference-between-this-2-machines-v0-byykr96toe9a1.jpg.webp",
    tips: ["Squeeze contraction", "Hold peak", "Light weight"],
    icon: faFistRaised
  },
  {
    name: "Incline Dumbbell Press",
    description: "Set bench to 30-45° angle. Press dumbbells up from shoulders.",
    sets: 4,
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1579758663054-6d9e56a1c7c3",
    tips: ["Rotate palms forward", "Triangular path", "Control descent"],
    icon: faCube
  },
  {
    name: "Decline Dumbbell Press",
    description: "Secure legs in decline bench. Start dumbbells at lower chest.",
    sets: 4,
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1579758626643-6a8f44e21052",
    tips: ["Elbows tucked", "Full stretch", "Neutral wrist"],
    icon: faHand
  },
  {
    name: "Standing Cable Fly",
    description: "Set cables to shoulder height. Stand centered with slight lean.",
    sets: 3,
    reps: "10-15",
    image: "https://liftmanual.com/wp-content/uploads/2023/04/cable-standing-fly.jpg",
    tips: ["Constant tension", "Squeeze across body", "Elbows fixed"],
    icon: faRing
  },
  {
    name: "Squeeze Press",
    description: "Use light dumbbells. Press weights together at chest level.",
    sets: 3,
    reps: "10-12",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Isometric hold", "Inner chest focus", "Slow tempo"],
    icon: faSpider
  },
  {
    name: "Floor Press",
    description: "Lie on floor with knees bent. Lower dumbbells until elbows touch floor.",
    sets: 3,
    reps: "8-12",
    image: "https://images.unsplash.com/photo-1596357395217-80de13137e5a",
    tips: ["Power off floor", "No elbow bounce", "Full extension"],
    icon: faAnchor
  },
  {
    name: "Landmine Press",
    description: "Anchor barbell in landmine. Stand staggered stance.",
    sets: 3,
    reps: "8-12",
    image: "https://cdn.shopify.com/s/files/1/1633/7705/files/landmine_exercises_for_chest_480x480.jpg",
    tips: ["Unilateral focus", "Core engagement", "45° press angle"],
    icon: faBolt
  },
  {
    name: "Close-Grip Bench Press",
    description: "Grip bar with hands shoulder-width. Lower bar to lower chest.",
    sets: 3,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    tips: ["Triceps engagement", "Elbows tucked", "Partial range option"],
    icon: faShieldAlt
  },
  {
    name: "Reverse Grip Bench Press",
    description: "Use underhand grip slightly wider than shoulders.",
    sets: 3,
    reps: "8-10",
    image: "https://images.unsplash.com/photo-1596357395217-80de13137e5a",
    tips: ["Wrist alignment", "Lower chest focus", "Controlled tempo"],
    icon: faCube
  },
  {
    name: "Medicine Ball Push-Ups",
    description: "Place hands on medicine balls. Maintain balance while lowering.",
    sets: 3,
    reps: "10-15",
    image: "https://thumbs.dreamstime.com/b/fit-woman-exercising-medicine-ball-workout-out-arms-exercise-training-triceps-biceps-doing-push-ups-62690481.jpg",
    tips: ["Stabilizer activation", "Explosive push", "Core tension"],
    icon: faFistRaised
  },
  {
    name: "Plyometric Push-Ups",
    description: "Start in push-up position. Lower quickly then explode upward.",
    sets: 3,
    reps: "8-10",
    image: "https://www.spartan.com/cdn/shop/articles/289b38125a83b8933ddd6e1b9e35de1f_1200x.jpg?v=1595863191",
    tips: ["Power development", "Soft landing", "Wrist protection"],
    icon: faFire
  },
]

const ChestWorkout: React.FC = () => {
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
            Charming Chest Workout Guide
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Professional coaching cues for perfect chest development
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

export default ChestWorkout
