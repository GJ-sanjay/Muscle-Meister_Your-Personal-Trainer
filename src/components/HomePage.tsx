"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { PiBarbellFill } from "react-icons/pi"
import TextTransition, { presets } from "react-text-transition"
import AnimatedBackground from "./AnimatedBackground"

const TARGET_TEXT = "Explore Workouts"
const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50
const CHARS = "!@#$%^&*():{};|,.<>/?"
const DEVELOPED_BY_TEXTS = ["Developed by", "SANJAY GJ", ":) THANK YOU"]

const EncryptButton = ({ navigate }: { navigate: ReturnType<typeof useNavigate> }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [text, setText] = useState(TARGET_TEXT)

  const scramble = () => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length)
          const randomChar = CHARS[randomCharIndex]

          return randomChar
        })
        .join("")

      setText(scrambled)
      pos++

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble()
      }
    }, SHUFFLE_TIME)
  }

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setText(TARGET_TEXT)
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "rgba(255, 255, 255, 0.9)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={() => navigate("/main")}
      className="group relative overflow-hidden rounded-lg border-[1px] border-white bg-transparent px-4 sm:px-8 py-3 sm:py-4 font-mono text-sm sm:text-base font-medium uppercase text-white transition-all duration-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <PiBarbellFill />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-black/0 from-40% via-black/100 to-black/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  )
}

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const videoLinks = [
    "https://www.youtube.com/embed/i6vdsd2PKQs?autoplay=1&mute=1&loop=1&playlist=i6vdsd2PKQs",
    "https://www.youtube.com/embed/Sc7LUjbKBHw?autoplay=1&mute=1&loop=1&playlist=Sc7LUjbKBHw",
    "https://www.youtube.com/embed/SIIsgcLGb3w?autoplay=1&mute=1&loop=1&playlist=SIIsgcLGb3w",
    "https://www.youtube.com/embed/qV-kw7l_ZNk?autoplay=1&mute=1&loop=1&playlist=qV-kw7l_ZNk",
    "https://www.youtube.com/embed/ig17bjPE-hE?autoplay=1&mute=1&loop=1&playlist=ig17bjPE-hE",
  ]

  const [currentVideo, setCurrentVideo] = useState<string>("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoLinks.length)
    setCurrentVideo(videoLinks[randomIndex])
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % DEVELOPED_BY_TEXTS.length)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatedBackground />

      {/* Video Background with mobile optimization */}
      {currentVideo && (
        <div className="relative w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] sm:w-[100%] h-[100%] scale-[1.3]"
            src={currentVideo}
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{ pointerEvents: "none" }}
          />
        </div>
      )}

      {/* Improved overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content with better mobile spacing */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 text-center"
        >
          Welcome to Muscle Meister
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <EncryptButton navigate={navigate} />
        </motion.div>
      </div>

      {/* Developer credit with responsive positioning */}
      <div className="absolute bottom-4 right-4 text-white text-sm sm:text-lg font-mono">
        <TextTransition springConfig={presets.wobbly}>{DEVELOPED_BY_TEXTS[index]}</TextTransition>
      </div>
    </div>
  )
}

export default HomePage

