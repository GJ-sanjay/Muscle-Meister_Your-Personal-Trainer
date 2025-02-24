import type React from "react"
import { useState, useEffect } from "react"
import { workoutPlans, dietPlans } from "../data/workoutPlans"
import type { WorkoutPlan, DietPlan, DayPlan } from "../types"
import WorkoutCard from "./WorkoutCard"
import DietPlanCard from "./DietPlanCard"
import Navbar from "./Navbar"

const MainContent: React.FC<{ selectedDietType: string | null }> = ({
  selectedDietType: initialSelectedDietType,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>("Monday")
  const [selectedDietType, setSelectedDietType] = useState<string | null>(
    initialSelectedDietType
  )

  useEffect(() => {
    const today = new Date().toLocaleString("en-us", { weekday: "long" })
    setSelectedDay(today)
  }, [])

  useEffect(() => {
    setSelectedDietType(initialSelectedDietType)
  }, [initialSelectedDietType])

  const handleDietSelection = (type: string) => {
    setSelectedDietType(type)
  }

  const currentWorkout = workoutPlans.find(
    (plan: WorkoutPlan) => plan.day === selectedDay
  )

  const currentDietPlan = selectedDietType
    ? dietPlans.find((plan: DietPlan) => plan.type === selectedDietType)
    : null

  const currentDayMeals = currentDietPlan
    ? currentDietPlan.days.find((day: DayPlan) => day.day === selectedDay)
    : null

  return (
    <div className="min-h-screen bg-gray-900 text-white font-bebas">
      <Navbar onDietSelect={handleDietSelection} />
      <div className="pt-20">
        {/* Integrated Diet Plan Selection Section */}
        {!selectedDietType && (
          <section className="py-8 bg-gradient-to-r from-purple-600 to-blue-600 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Choose Your Diet Plan</h2>
            <p className="mb-6">
              Customize your training with a diet plan that fits your goals.
            </p>
            <div className="flex justify-center gap-4">
              {["Muscle Gain", "Fat Loss", "Shredded"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleDietSelection(type)}
                  className="bg-red-500 hover:bg-red-600 py-2 px-6 rounded-full font-bold transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Day Selection (Monday-Saturday) */}
        <div className="py-4 px-4 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
              (day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`${
                    selectedDay === day ? "bg-red-500" : "bg-gray-700"
                  } text-white font-bold py-2 px-4 rounded-full transition-colors`}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto py-8 px-4">
          {currentWorkout && (
            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                {selectedDay} - {currentWorkout.focus}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentWorkout.exercises.map((exercise, index) => (
                  <WorkoutCard key={index} exercise={exercise} />
                ))}
              </div>
            </div>
          )}

          {currentDayMeals && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                {currentDietPlan?.type} Diet Plan for {selectedDay}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentDayMeals.meals.map((meal, index) => (
                  <DietPlanCard key={index} meal={meal} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default MainContent
