import { WorkoutPlan, BodyPartWorkout, DietPlan } from '../types';

export const workoutPlans: WorkoutPlan[] = [
  {
    day: "Monday",
    focus: "Chest and Triceps",
    exercises: [
      {
        name: "Bench Press",
        sets: 4,
        reps: "8-12",
        description: "Lie on bench, lower bar to chest, push up to starting position",
        muscleGroup: "Chest",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/barbell-close-grip-bench-press.jpg",
        videoLink: "https://youtube.com/shorts/0cXAp6WhSj4?si=oauZkxOImfii7bk6" // Correct embed URL with timestamp
      },
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "10-12",
        description: "Perform on incline bench for upper chest emphasis",
        muscleGroup: "Upper Chest",
        image: "https://training.fit/wp-content/uploads/2020/02/bankdruecken-kurzhantel-schraeg.png",
        videoLink: "https://youtu.be/IP4oeKh1Sd4?si=sUGzivbc2meZmkR_" // Example video URL
      },
      {
        name: "Tricep Pushdowns",
        sets: 3,
        reps: "12-15",
        description: "Use cable machine, push down with straight bar or rope",
        muscleGroup: "Triceps",
        image: "https://i.pinimg.com/474x/92/1e/4c/921e4cb34a7f3c4f1079e9d194c6c6d3.jpg",
        videoLink: "https://www.youtube.com/watch?v=2-LAMcpzODU" // Example video URL
      },
      {
        name: "Chest Flyes",
        sets: 3,
        reps: "12-15",
        description: "Use cables or dumbbells to perform chest flyes",
        muscleGroup: "Chest",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/band-chest-fly.jpg",
        videoLink: "https://www.youtube.com/watch?v=mLgYNdxj-Vw" // Example video URL
      }
    ]
  },
  {
    day: "Tuesday",
    focus: "Legs and Abs",
    exercises: [
      {
        name: "Squats",
        sets: 4,
        reps: "8-12",
        description: "Perform barbell squats with proper form",
        muscleGroup: "Legs",
        image: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-langhantel-800x448.png",
        videoLink: "https://www.youtube.com/watch?v=MLoZuAkIyZI" // New video link
      },
      {
        name: "Leg Press",
        sets: 4,
        reps: "10-12",
        description: "Machine-based leg exercise",
        muscleGroup: "Legs",
        image: "https://training.fit/wp-content/uploads/2020/03/beinpresse.png",
        videoLink: "https://www.youtube.com/watch?v=8EMbB0tCn7Q" // Example video URL
      },
      {
        name: "Romanian Deadlifts",
        sets: 3,
        reps: "8-12",
        description: "Focus on hamstrings and glutes",
        muscleGroup: "Hamstrings",
        image: "https://training.fit/wp-content/uploads/2020/03/kreuzheben-gestreckte-beine.png",
        videoLink: "https://www.youtube.com/watch?v=2SHsk9AzdjA" // New video link
      },
      {
        name: "Plank",
        sets: 3,
        reps: "30-60 seconds",
        description: "Core stability exercise",
        muscleGroup: "Abs",
        image: "https://fitliferegime.com/wp-content/uploads/2021/10/Forearm-Plank.webp",
        videoLink: "https://www.youtube.com/watch?v=pSHjTRCQxIw" // Example video URL
      }
    ]
  },
  {
    day: "Wednesday",
    focus: "Back and Biceps",
    exercises: [
      {
        name: "Pull-ups",
        sets: 4,
        reps: "6-10",
        description: "Perform wide grip pull-ups to target back width",
        muscleGroup: "Back",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/wide-grip-pull-up.jpg",
        videoLink: "https://www.youtube.com/watch?v=_n7lV75yBug" // Example video URL
      },
      {
        name: "Barbell Rows",
        sets: 4,
        reps: "8-12",
        description: "Bend over, pull barbell to lower chest",
        muscleGroup: "Back",
        image: "https://training.fit/wp-content/uploads/2020/02/rudern-langhantel.png",
        videoLink: "https://www.youtube.com/watch?v=Nqh7q3zDCoQ" // Example video URL
      },
      {
        name: "Bicep Curls",
        sets: 3,
        reps: "10-15",
        description: "Use dumbbells or a barbell for this exercise",
        muscleGroup: "Biceps",
        image: "https://www.dmoose.com/cdn/shop/articles/1_27c2b3f6-0d18-4cb0-adf1-935e612684fa.jpg?v=1658851752",
        videoLink: "https://www.youtube.com/watch?v=XE_pHwbst04" // Example video URL
      },
      {
        name: "Face Pulls",
        sets: 3,
        reps: "12-15",
        description: "Use cable machine to target rear delts",
        muscleGroup: "Back/Shoulders",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/cable-standing-face-pull.jpg",
        videoLink: "https://www.youtube.com/watch?v=DVxfKB0BnlY" // Example video URL
      }
    ]
  },
  {
    day: "Thursday",
    focus: "Shoulders and Abs",
    exercises: [
      {
        name: "Overhead Press",
        sets: 4,
        reps: "8-12",
        description: "Perform standing or seated with dumbbells or barbell",
        muscleGroup: "Shoulders",
        image: "https://weighttraining.guide/wp-content/uploads/2018/09/Smith-machine-standing-overhead-press-resized.png",
        videoLink: "https://www.youtube.com/watch?v=mO37GW1Uylg" // Example video URL
      },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: "12-15",
        description: "Use dumbbells to target side delts",
        muscleGroup: "Shoulders",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lateral-to-front-raise.jpg",
        videoLink: "https://www.youtube.com/watch?v=PzsMitRdI_8" // Example video URL
      },
      {
        name: "Front Raises",
        sets: 3,
        reps: "12-15",
        description: "Focus on front delts using dumbbells",
        muscleGroup: "Shoulders",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-front-raise.jpg",
        videoLink: "https://www.youtube.com/watch?v=pcggs3bXPo4" // Example video URL
      },
      {
        name: "Russian Twists",
        sets: 3,
        reps: "20 twists (10 per side)",
        description: "Twist side to side with or without weight",
        muscleGroup: "Abs",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/russian-twist.jpg",
        videoLink: "https://www.youtube.com/watch?v=pzMWYoeSCzw" // Example video URL
      }
    ]
  },
  {
    day: "Friday",
    focus: "Legs",
    exercises: [
      {
        name: "Jump Squats",
        sets: 4,
        reps: "8-12",
        description: "Perform barbell squats with proper form",
        muscleGroup: "Legs",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/double-jump-squat.jpg",
        videoLink: "https://www.youtube.com/watch?v=QQWsscOgGkU" // Example video URL
      },
      {
        name: "Deadlifts",
        sets: 4,
        reps: "6-8",
        description: "Keep back straight, lift with legs and glutes",
        muscleGroup: "Legs/Back",
        image: "https://sportivetricksstorage.blob.core.windows.net/images/articles/powerlifting/technique/deadlift-muscles/new/1-conventional-muscles.webp",
        videoLink: "https://www.youtube.com/watch?v=vfKwjT5-86k" // Example video URL
      },
      {
        name: "Lunges",
        sets: 3,
        reps: "12 per leg",
        description: "Step forward into a lunge, alternating legs use weights to make it harder",
        muscleGroup: "Legs",
        image: "https://liftmanual.com/wp-content/uploads/2023/04/lunge.jpg",
        videoLink: "https://www.youtube.com/watch?v=wrwwXE_x-pQ&t=123s" // Example video URL
      }
    ]
  },
  {
    day: "Saturday",
    focus: "Active Recovery & Mental Wellbeing",
    exercises: [
      {
        name: "Gentle Yoga",
        sets: 1,
        reps: "30-45 minutes",
        description: "Focus on light stretches and breathing exercises to promote flexibility and relaxation.",
        muscleGroup: "Full Body",
        image: "https://www.hellomyyoga.com/blog/wp-content/uploads/2023/07/Types-of-Yoga.webp",
        videoLink: "https://www.youtube.com/watch?v=4pKly2JojMw" // Example yoga session video
      },
      {
        name: "Light Walking or Nature Walk",
        sets: 1,
        reps: "as long as you like",
        description: "Take a walk in a park or nearby trail to clear your mind and improve cardiovascular health.",
        muscleGroup: "Legs/Cardio",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop",
        videoLink: "https://www.youtube.com/watch?v=ynLpZGegiJE" // No specific video needed
      },
      {
        name: "Fun Activity of Choice",
        sets: 1,
        reps: "All night if needed ;)",
        description: "Engage in an enjoyable physical activity such as swimming, dancing, or playing a light sport.",
        muscleGroup: "Full Body",
        image: "https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.jpg?s=612x612&w=0&k=20&c=mVZX9qAsgnOv8C0t9gR81ofJ0JG20Orc4Io9r4AKNQQ=",
        videoLink: "https://www.youtube.com/watch?v=exI_hD_4jAM" // Optional based on activity
      },
      {
        name: "Social Connection",
        sets: 1,
        reps: "Unspecified",
        description: "Spend quality time with loved ones or friends to enhance mental well-being.",
        muscleGroup: "Mental Wellbeing",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop",
        videoLink: "https://www.youtube.com/watch?v=WKUgVpCqvfY" // No video applicable
      },
      {
        name: "Meditation",
        sets: 1,
        reps: "10-20 minutes",
        description: "Practice mindfulness meditation to reduce stress and improve focus.",
        muscleGroup: "Mental Wellbeing",
        image: "https://t4.ftcdn.net/jpg/04/29/98/53/360_F_429985307_Soobm8JrTAq3kOCM1GlJfq1J46COIvKb.jpg",
        videoLink: "https://www.youtube.com/watch?v=inpok4MKVLM" // Example meditation video
      },
      {
        name: "Date",
        sets: 1,
        reps: "to get a date watch the vid ;)",
        description: "Practice mindfulness meditation to reduce stress and improve focus.",
        muscleGroup: "Mental Wellbeing",
        image: "https://i.pinimg.com/736x/55/d0/b9/55d0b9ee66d25165eb3e0743268b2ddf.jpg",
        videoLink: "https://www.youtube.com/watch?v=SXHMnicI6Pg" // Example meditation video
      }
    ]
  }
  
];

export const dietPlans: DietPlan[] = [
  {
    type: "Muscle Gain",
    days: [
      {
        day: "Monday",
        meals: [
          {
            type: "Breakfast",
            name: "Idli with Sambar and Boiled Eggs",
            description: "Soft idlis served with protein-packed sambar and boiled eggs for extra protein.",
            calories: 450,
            image: "https://as1.ftcdn.net/v2/jpg/01/42/70/66/1000_F_142706641_pDs13MNNEkoP8fmLkqmbFf7rnEq1zNwe.jpg",
          },
          {
            type: "Lunch",
            name: "Chicken Biryani with Curd",
            description: "Aromatic brown rice biryani with spiced chicken and a side of curd.",
            calories: 600,
            image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=g",
          },
          {
            type: "Snacks",
            name: "Sundal",
            description: "Boiled chickpeas tossed with grated coconut and tempered spices.",
            calories: 150,
            image: "https://t4.ftcdn.net/jpg/09/97/82/15/240_F_997821592_dIBqsRiR8OcgetJcDOuhI4bpVmiGqKW1.jpg",
          },
          {
            type: "Dinner",
            name: "Grilled Fish with Steamed Vegetables",
            description: "Protein-rich grilled fish served with fresh steamed vegetables.",
            calories: 500,
            image: "https://media.istockphoto.com/id/1397370987/photo/grilled-mackerel-fish-with-the-addition-of-herbs-and-lemon-slices-on-the-grill.jpg?s=612x612&w=0&k=20&c=XhPBmdU1T1tBb5_Y0MPPoLjsyYcHYK2edn1dk4dBDqg=",
          },
        ],
      },
      {
        day: "Tuesday",
        meals: [
          {
            type: "Breakfast",
            name: "Ragi Dosa with Coconut Chutney",
            description: "Crispy ragi dosa served with nutritious coconut chutney.",
            calories: 400,
            image: "https://www.shutterstock.com/image-photo/ragi-dosa-healthy-south-indian-260nw-2094559492.jpg",
          },
          {
            type: "Lunch",
            name: "Mutton Kurma with Red Rice",
            description: "Flavorful mutton kurma served with nutritious red rice.",
            calories: 650,
            image: "https://t4.ftcdn.net/jpg/05/32/19/77/240_F_532197714_A3iAnfwDeau6jYVbDa1g6ZB2y5w0443z.jpg",
          },
          {
            type: "Snacks",
            name: "Banana and Peanut Butter Smoothie",
            description: "A protein-rich banana and peanut butter smoothie for a quick energy boost.",
            calories: 250,
            image: "https://img.freepik.com/free-photo/banana-almond-smoothie-marble-background_1150-45190.jpg?ga=GA1.1.151227805.1739359475&semt=ais_hybrid",
          },
          {
            type: "Dinner",
            name: "Egg Curry with Chapati",
            description: "Spicy egg curry served with whole-wheat chapati for a protein-packed dinner.",
            calories: 500,
            image: "https://media.istockphoto.com/id/533902662/photo/spicy-anda-curry-or-egg-curry-with-roti-and-rice.jpg?s=1024x1024&w=is&k=20&c=QTvnXuj_L4-SB4lEelsUH6bHYSljnPCpViQXKO4tLZE=",
          },
        ],
      },
      {
        day: "Wednesday",
        meals: [
          {
            type: "Breakfast",
            name: "Pongal with Coconut Chutney",
            description: "Traditional South Indian pongal paired with fresh coconut chutney.",
            calories: 450,
            image: "https://media.istockphoto.com/id/678434780/photo/ven-pongal-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=jqPqhh1SCHYvb7CrCSkd37_q2FwY8Nn-y5axLUG3Wvw=",
          },
          {
            type: "Lunch",
            name: "Grilled Chicken with Millet Rice",
            description: "Juicy grilled chicken served with healthy millet rice and steamed vegetables.",
            calories: 550,
            image: "https://media.istockphoto.com/id/508180500/photo/grilled-chicken-with-quinoa-and-brown-rice-salad.jpg?s=612x612&w=0&k=20&c=hA0KRa9xJ6tk9KFuZevykbhULHJ80WhVeFOOtvpuFRM=",
          },
          {
            type: "Snacks",
            name: "Spiced Peanuts",
            description: "Roasted peanuts seasoned with mild spices for a crunchy snack.",
            calories: 200,
            image: "https://media.gettyimages.com/id/1488822182/photo/image-of-white-bowl-containing-homemade-peanut-masala-chaat-street-style-savoury-snack.jpg?s=612x612&w=0&k=20&c=O3gU6obZuG0T3qSXY-rEY-qFga1orhaz07WhLIbieco=",
          },
          {
            type: "Dinner",
            name: "Paneer Tikka with Mixed Vegetables",
            description: "Grilled paneer tikka served with sautéed mixed vegetables.",
            calories: 500,
            image: "https://media.istockphoto.com/id/1363048607/photo/paneer-tikka.jpg?s=612x612&w=0&k=20&c=vjVqdZwyI7JuOi7DTVji1Vqfmb4bf8yXFDO-HbU8pnk=",
          },
        ],
      },
      {
        day: "Thursday",
        meals: [
          {
            type: "Breakfast",
            name: "Upma with Boiled Egg",
            description: "Semolina upma enriched with vegetables and served with a boiled egg.",
            calories: 400,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzj6ElEZ-TJiU5rVlPVuFm3_FYbtlt8e2gQ&s",
          },
          {
            type: "Lunch",
            name: "Fish Curry with Brown Rice",
            description: "Tangy fish curry served with fiber-rich brown rice.",
            calories: 600,
            image: "https://www.shutterstock.com/image-photo/spicy-fish-curry-kerala-konkan-260nw-1795099312.jpg",
          },
          {
            type: "Snacks",
            name: "Roasted Chana with Jaggery",
            description: "Crunchy roasted chana mixed with sweet jaggery for a protein snack.",
            calories: 150,
            image: "https://as2.ftcdn.net/jpg/06/76/70/03/1000_F_676700330_by6Q4RO41NjEs9oOmuV5QpIXii1LyYcO.jpg",
          },
          {
            type: "Dinner",
            name: "Vegetable Stew with Appam",
            description: "Creamy vegetable stew served with soft appams for a light dinner.",
            calories: 450,
            image: "https://www.shutterstock.com/image-photo/appam-vegetable-stew-one-famous-600nw-2203037921.jpg",
          },
        ],
      },
      {
        day: "Friday",
        meals: [
          {
            type: "Breakfast",
            name: "Keerai Adai with Avial",
            description: "Spinach-infused adai served with avial for a protein-packed breakfast.",
            calories: 450,
            image: "https://www.yummytummyaarthi.com/wp-content/uploads/2016/02/1-22.jpg",
          },
          {
            type: "Lunch",
            name: "Prawn Curry with Red Rice",
            description: "Spicy prawn curry paired with nutritious red rice.",
            calories: 600,
            image: "https://media.istockphoto.com/id/1398317278/photo/thai-fried-rice-with-shrimp-green-onion-lime-on-wooden-background-side-view-traditional-thai.jpg?s=612x612&w=0&k=20&c=wmWalQMPiqFehyAc8Q6zNKZWF0Tyy8vGn212IFOXinc=",
          },
          {
            type: "Snacks",
            name: "Boiled Sweet Corn",
            description: "Steamed sweet corn with a sprinkle of salt and spices.",
            calories: 150,
            image: "https://www.shutterstock.com/image-photo/boiled-corn-butter-herbs-ripe-600nw-2188207891.jpg",
          },
          {
            type: "Dinner",
            name: "Chicken Soup with Ragi Ball",
            description: "Comforting chicken soup served with a traditional ragi ball.",
            calories: 500,
            image: "https://thumbs.dreamstime.com/b/ragi-mudde-spicy-butter-chicken-curry-69754943.jpg",
          },
        ],
      },
    ],
  },
  {
    "type": "Fat Loss",
    "days": [
      {
        "day": "Monday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Idli with Sambar",
            "description": "Steamed soft idlis served with a flavorful sambar packed with vegetables and spices.",
            "calories": 300,
            "image": "https://images.unsplash.com/photo-1605345503941-d2b4173c0a1e?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Grilled Chicken with Vegetable Rasam",
            "description": "Lean grilled chicken paired with a tangy rasam made with tamarind, tomatoes, and spices.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1584964350194-3f572d9cdb55?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Sundal",
            "description": "A healthy snack of boiled chickpeas tossed with grated coconut and tempered with mustard seeds.",
            "calories": 150,
            "image": "https://images.unsplash.com/photo-1560478487-2ccbe7f1c8ad?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Vegetable Kurma with Chapati",
            "description": "A mixed vegetable kurma cooked with aromatic spices and served with whole wheat chapati.",
            "calories": 450,
            "image": "https://images.unsplash.com/photo-1635935862699-d11adab2bb7f?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Tuesday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Ven Pongal",
            "description": "A traditional Tamil breakfast made of rice and yellow moong dal, tempered with ghee, pepper, and ginger.",
            "calories": 350,
            "image": "https://images.unsplash.com/photo-1581606850171-b69792a2ba88?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Fish Curry with Brown Rice",
            "description": "A delicious and spicy fish curry served with nutritious brown rice.",
            "calories": 450,
            "image": "https://images.unsplash.com/photo-1606439986071-dff3c6bb9d74?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Cucumber Raita",
            "description": "Cooling cucumber mixed with yogurt and a sprinkle of cumin powder.",
            "calories": 100,
            "image": "https://images.unsplash.com/photo-1603054040394-e9c3bfe7b0f0?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Grilled Paneer Tikka with Salad",
            "description": "Grilled cubes of paneer marinated in a spicy yogurt mix, served with a side of fresh salad.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1604674743973-d6e508c303b0?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Wednesday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Dosa with Coconut Chutney",
            "description": "Crispy dosa served with a refreshing coconut chutney and a side of sambar.",
            "calories": 350,
            "image": "https://images.unsplash.com/photo-1600167622493-6db61f13b4b1?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Chicken Chettinad with Steamed Rice",
            "description": "A spicy, aromatic chicken Chettinad curry paired with steamed rice.",
            "calories": 500,
            "image": "https://images.unsplash.com/photo-1602296880628-0d43a9bbd52f?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Bhel Puri",
            "description": "A low-calorie snack made of puffed rice, tomatoes, onions, and a tangy tamarind chutney.",
            "calories": 150,
            "image": "https://images.unsplash.com/photo-1602569941687-2d61849cb28b?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Tofu Stir Fry with Vegetables",
            "description": "Stir-fried tofu with bell peppers, onions, and other fresh vegetables.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1602569941687-2d61849cb28b?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Thursday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Rava Upma",
            "description": "A savory dish made with rava (semolina), mixed vegetables, and mild spices.",
            "calories": 300,
            "image": "https://images.unsplash.com/photo-1565299681-f70879b7d314?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Mutton Kuzhambu with Brown Rice",
            "description": "Slow-cooked mutton in a spicy kuzhambu curry served with nutritious brown rice.",
            "calories": 500,
            "image": "https://images.unsplash.com/photo-1592870456678-e9ed9b496213?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Pesarattu with Ginger Chutney",
            "description": "Green moong dal pancakes served with a tangy ginger chutney.",
            "calories": 150,
            "image": "https://images.unsplash.com/photo-1592341603764-bbfe92a63235?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Mixed Vegetable Sambar with Quinoa",
            "description": "A hearty sambar made with mixed vegetables served with quinoa instead of rice.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1589209703084-f2de68b6d2e0?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Friday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Appam with Stew",
            "description": "Soft appams served with a light vegetable stew made with coconut milk.",
            "calories": 350,
            "image": "https://images.unsplash.com/photo-1590966198055-dc7244fa6607?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Kozhi Varuthathu (Spicy Fried Chicken) with Salad",
            "description": "Crispy fried chicken coated with a spicy masala served with a side of fresh salad.",
            "calories": 450,
            "image": "https://images.unsplash.com/photo-1605052467093-64c7305b764f?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Buttermilk with Salt and Cumin",
            "description": "A refreshing glass of buttermilk with a pinch of salt and cumin powder.",
            "calories": 100,
            "image": "https://images.unsplash.com/photo-1605897742677-f2c8bc5b61c1?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Sambar with Idiyappam",
            "description": "Steamed idiyappam (string hoppers) served with a rich and flavorful sambar.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1616231742428-69ab5566e469?w=800&auto=format&fit=crop"
          }
        ]
      }
    ]
  },
  {
    "type": "Shredded",
    "days": [
      {
        "day": "Monday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Oats Idli with Coconut Chutney",
            "description": "Oats-based idlis served with a side of fresh coconut chutney for added fiber and healthy fats.",
            "calories": 300,
            "image": "https://images.unsplash.com/photo-1571601387454-07f6479cc8ab?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Grilled Chicken Salad with Lemon Dressing",
            "description": "Lean grilled chicken on a bed of mixed greens with a tangy lemon dressing.",
            "calories": 350,
            "image": "https://images.unsplash.com/photo-1604506810445-8c3f5bc1b1ae?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Spiced Buttermilk",
            "description": "A refreshing and low-calorie drink made with yogurt, cumin, and a pinch of black salt.",
            "calories": 100,
            "image": "https://images.unsplash.com/photo-1591944315081-df1a62c2c8fa?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Methi (Fenugreek) Paratha with Raita",
            "description": "A healthy methi paratha served with a cooling cucumber raita for a low-carb, high-fiber dinner.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1605802916495-3d52e24fbc7d?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Tuesday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Rava Upma with Vegetables",
            "description": "A light breakfast made with semolina and loaded with fiber-rich vegetables for a fulfilling start.",
            "calories": 300,
            "image": "https://images.unsplash.com/photo-1565299681-f70879b7d314?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Fish Moilee with Brown Rice",
            "description": "A light and flavorful fish curry cooked in coconut milk, paired with fiber-rich brown rice.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1606439986071-dff3c6bb9d74?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Cucumber Slices with Lemon and Salt",
            "description": "Fresh cucumber slices sprinkled with lemon juice and a pinch of salt for a refreshing, low-calorie snack.",
            "calories": 50,
            "image": "https://images.unsplash.com/photo-1595217577000-057c1326b8a1?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Grilled Paneer with Steamed Vegetables",
            "description": "Lean grilled paneer served with a side of steamed vegetables for a protein-packed dinner.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1604674743973-d6e508c303b0?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Wednesday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Moong Dal Chilla",
            "description": "Protein-rich moong dal pancakes served with a side of tangy tomato chutney.",
            "calories": 300,
            "image": "https://images.unsplash.com/photo-1597072651242-52a35ed10c11?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Chickpea Sundal with Vegetables",
            "description": "Boiled chickpeas mixed with tempered spices and paired with a serving of sautéed vegetables.",
            "calories": 350,
            "image": "https://images.unsplash.com/photo-1560478487-2ccbe7f1c8ad?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Boiled Egg with Black Pepper",
            "description": "A simple, high-protein snack with boiled eggs sprinkled with black pepper.",
            "calories": 100,
            "image": "https://images.unsplash.com/photo-1582652940427-0ea59861d8ad?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Tofu Stir Fry with Bell Peppers",
            "description": "Stir-fried tofu with colorful bell peppers and a dash of soy sauce for added flavor.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1602569941687-2d61849cb28b?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Thursday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Idli with Tomato Chutney",
            "description": "Steamed idlis served with a fresh and tangy tomato chutney for a healthy, low-calorie breakfast.",
            "calories": 300,
            "image": "https://images.unsplash.com/photo-1571601387454-07f6479cc8ab?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Chicken Tikka Salad",
            "description": "Grilled chicken tikka served on a bed of fresh vegetables with a light dressing.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1604506810445-8c3f5bc1b1ae?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Coconut Water with Mint",
            "description": "A refreshing drink made with fresh coconut water and a hint of mint for added freshness.",
            "calories": 50,
            "image": "https://images.unsplash.com/photo-1591944315081-df1a62c2c8fa?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Mixed Vegetable Sambar with Quinoa",
            "description": "Sambar with mixed vegetables served with a side of quinoa for a protein-packed, high-fiber meal.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1589209703084-f2de68b6d2e0?w=800&auto=format&fit=crop"
          }
        ]
      },
      {
        "day": "Friday",
        "meals": [
          {
            "type": "Breakfast",
            "name": "Methi Paratha with Yogurt",
            "description": "A nutritious methi paratha served with a side of plain yogurt for added protein and probiotics.",
            "calories": 350,
            "image": "https://images.unsplash.com/photo-1605802916495-3d52e24fbc7d?w=800&auto=format&fit=crop"
          },
          {
            "type": "Lunch",
            "name": "Grilled Fish with Sauteed Vegetables",
            "description": "Lean grilled fish paired with sautéed vegetables for a light and healthy lunch.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1606439986071-dff3c6bb9d74?w=800&auto=format&fit=crop"
          },
          {
            "type": "Snacks",
            "name": "Mixed Nuts (Almonds, Cashews, Walnuts)",
            "description": "A small serving of mixed nuts for a healthy, filling snack.",
            "calories": 150,
            "image": "https://images.unsplash.com/photo-1602569941687-2d61849cb28b?w=800&auto=format&fit=crop"
          },
          {
            "type": "Dinner",
            "name": "Vegetable Curry with Cauliflower Rice",
            "description": "A flavorful vegetable curry served with cauliflower rice as a low-calorie alternative to regular rice.",
            "calories": 400,
            "image": "https://images.unsplash.com/photo-1586432093591-2556e5d5688f?w=800&auto=format&fit=crop"
          }
        ]
      }
    ]
  }
  
  
];

export const bodyPartWorkouts: BodyPartWorkout[] = [
  {
    part: "Chest",
    exercises: [
      {
        name: "Flat Bench Press",
        sets: 4,
        reps: "8-12",
        description: "Classic chest building exercise",
        muscleGroup: "Chest",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop"
      },
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "10-12",
        description: "Perform on incline bench for upper chest emphasis",
        muscleGroup: "Upper Chest",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop"
      },
      {
        name: "Chest Flyes",
        sets: 3,
        reps: "12-15",
        description: "Use cables or dumbbells to perform chest flyes",
        muscleGroup: "Chest",
        image: "https://images.unsplash.com/photo-1574680089030-235c17aef0c7?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    part: "Legs",
    exercises: [
      {
        name: "Squats",
        sets: 4,
        reps: "8-12",
        description: "Perform barbell squats with proper form",
        muscleGroup: "Legs",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop"
      },
      {
        name: "Romanian Deadlifts",
        sets: 3,
        reps: "8-12",
        description: "Focus on hamstrings and glutes",
        muscleGroup: "Hamstrings",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=800&auto=format&fit=crop"
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: "10-15",
        description: "Push weight with legs using leg press machine",
        muscleGroup: "Legs",
        image: "https://images.unsplash.com/photo-1586182989504-648d6bc0a8e6?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    part: "Back",
    exercises: [
      {
        name: "Pull-ups",
        sets: 3,
        reps: "8-12",
        description: "Grip bar shoulder-width, pull chin above bar",
        muscleGroup: "Back",
        image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2fb?w=800&auto=format&fit=crop"
      },
      {
        name: "Bent-over Rows",
        sets: 4,
        reps: "8-12",
        description: "Use barbell or dumbbells, pull weights to waist",
        muscleGroup: "Back",
        image: "https://images.unsplash.com/photo-1599058918147-80a46c44d33b?w=800&auto=format&fit=crop"
      },
      {
        name: "Deadlifts",
        sets: 4,
        reps: "8-12",
        description: "Classic full-body exercise targeting back and hamstrings",
        muscleGroup: "Back",
        image: "https://images.unsplash.com/photo-1590341947590-250b8b41a5b4?w=800&auto=format&fit=crop"
      }
    ]
  }
];

