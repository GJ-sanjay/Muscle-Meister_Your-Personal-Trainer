import React from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const WarmUp: React.FC = () => {
  const navigate = useNavigate()

  const warmUpExercises = [
    {
      name: "Dynamic Stretching",
      description: "Enhance your flexibility and prepare your muscles for intense workouts.",
      benefits: ["Improves range of motion", "Reduces risk of injury", "Preps muscles"],
      image: "https://source.unsplash.com/featured/?stretching", // Replace with your own image
    },
    {
      name: "Arm Circles",
      description: "Warm up your shoulder joints and arms with this easy exercise.",
      benefits: ["Increases shoulder mobility", "Activates arm muscles", "Boosts blood flow"],
      image: "https://source.unsplash.com/featured/?armworkout", // Replace with your own image
    },
    {
      name: "Leg Swings",
      description: "Get your legs ready by improving hip mobility and balance.",
      benefits: ["Improves hip flexibility", "Enhances balance", "Prepares legs"],
      image: "https://source.unsplash.com/featured/?legs", // Replace with your own image
    },
    {
      name: "Jumping Jacks",
      description: "A classic warm-up exercise to elevate your heart rate.",
      benefits: ["Boosts cardiovascular system", "Increases endurance", "Full body warm-up"],
      image: "https://source.unsplash.com/featured/?jumpingjacks", // Replace with your own image
    },
    {
      name: "High Knees",
      description: "Engage your core and legs to get the blood flowing.",
      benefits: ["Strengthens core", "Improves coordination", "Preps lower body"],
      image: "https://source.unsplash.com/featured/?highknees", // Replace with your own image
    },
    {
      name: "Butt Kicks",
      description: "Activate your hamstrings and improve leg speed.",
      benefits: ["Activates hamstrings", "Improves leg coordination", "Preps muscles"],
      image: "https://source.unsplash.com/featured/?buttkicks", // Replace with your own image
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white font-bebas pt-20 px-4">
      <button
        onClick={() => navigate("/cardio")}
        className="mb-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to Cardio Workouts
      </button>
      <h1 className="text-3xl font-bold text-red-500 mb-6">Warm-Up Exercises</h1>
      <p className="mb-6 text-lg">
        Prepare your body for an intense workout with these dynamic warm-up exercises designed to boost mobility and reduce injury risk.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warmUpExercises.map((exercise, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col">
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{exercise.name}</h2>
            <p className="mb-2">{exercise.description}</p>
            <ul className="list-disc list-inside flex-1">
              {exercise.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Remember, a proper warm-up is essential for optimal performance and injury prevention. Embrace the futuristic fitness journey and become independent of a personal trainer!
        </p>
      </div>
    </div>
  )
}

export default WarmUp
