export interface Exercise {
  name: string;
  sets?: number; // Optional, in case sets are not provided
  reps?: string; // Optional, in case reps are not provided
  description?: string; // Optional, in case description is not provided
  muscleGroup?: string; // Optional, in case muscleGroup is not provided
  image?: string; // Optional, in case the image is missing
  videoLink?: string; // Optional, for the video link
}


export interface WorkoutPlan {
  day: string;
  focus: string;
  exercises: Exercise[];
}

export interface BodyPartWorkout {
  part: string;
  exercises: Exercise[];
}

export interface Meal {
  type: "Breakfast" | "Lunch" | "Snacks" | "Dinner"; // Specific meal type
  name: string; // Dish name
  description?: string; // Optional, in case description is not provided
  calories: number; // Calorie count
  image?: string; // Optional, in case image is missing
}

export interface DayPlan {
  day: string; // Day of the week (e.g., Monday, Tuesday)
  meals: Meal[]; // Array of meals for the day
}

export interface DietPlan {
  type: "Muscle Gain" | "Fat Loss" | "Shredded"; // Defined diet types
  days: DayPlan[]; // Array of plans for all days in the week
}
