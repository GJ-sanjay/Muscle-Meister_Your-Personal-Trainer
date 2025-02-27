"use client"

import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHandFist,
  faFire,
  faDragon,
  faChevronDown,
  faDumbbell,
  faAppleAlt,
  faEnvelope,
  faHeartPulse,
  faRunning,
  faGamepad,
  faBars,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const Navbar: React.FC<{ onDietSelect: (dietType: string) => void }> = ({ onDietSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<"body" | "diet" | "contact" | null>(null)
  const [selected, setSelected] = useState<"body" | "diet" | "contact" | null>(null)
  const navigate = useNavigate()

  const handleSetSelected = (val: "body" | "diet" | "contact" | null) => {
    setSelected(val)
  }

  const handleDropdownClick = (type: "body" | "diet" | "contact") => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === type ? null : type)
    }
  }

  const handleDietSelect = (dietType: string) => {
    onDietSelect(dietType)
    setSelected(null)
    navigate("/main")
  }

  const handleContactClick = () => {
    window.open("https://sanjay-jayakumar-portfolio.netlify.app/", "_blank")
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-red-600 cursor-pointer font-bebas"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Muscle Meister
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative flex h-fit gap-2">
            {["body", "diet"].map((type) => (
              <div key={type} className="relative">
                <motion.button
                  id={`shift-tab-${type}`}
                  onMouseEnter={() => handleSetSelected(type as "body" | "diet" | "contact")}
                  onMouseLeave={() => {}}
                  className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
                    selected === type ? "bg-red-600 text-white" : "text-white hover:bg-red-600/20"
                  } font-bebas ${selected === type ? "font-bold" : "font-normal"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon
                    icon={type === "body" ? faDumbbell : faAppleAlt}
                    className="mr-2"
                  />
                  <span>{type === "body" ? "Body Part Workouts" : "Diet Plans"}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform ${selected === type ? "rotate-180" : ""}`}
                  />
                </motion.button>
                <AnimatePresence>
                  {selected === type && (
                    <DropdownContent
                      type={type}
                      onDietSelect={handleDietSelect}
                      onMouseLeave={() => handleSetSelected(null)}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <motion.button
            onClick={() => navigate("/cardio")}
            className="text-white hover:text-red-500 font-semibold flex items-center font-bebas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faHeartPulse} className="mr-2" />
            Cardio
          </motion.button>
          <motion.button
            onClick={() => navigate("/warmup")}
            className="text-white hover:text-red-500 font-semibold flex items-center font-bebas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faRunning} className="mr-2" />
            Warm-Up
          </motion.button>
          <motion.button
            onClick={() => navigate("/game")}
            className="text-white hover:text-red-500 font-semibold flex items-center font-bebas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
            Play Game
          </motion.button>
          <motion.button
            onClick={handleContactClick}
            className="text-white hover:text-red-500 font-semibold flex items-center font-bebas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="md:hidden fixed top-0 right-0 w-64 bg-black/95 backdrop-blur-lg p-4 h-screen overflow-y-auto"
          >
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white"
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">×</span>
            </motion.button>
            <motion.ul
              className="mt-12 space-y-4"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="show"
            >
              {["body", "diet"].map((type) => (
                <motion.li
                  key={type}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <button
                    onClick={() => handleDropdownClick(type as "body" | "diet" | "contact")}
                    className="w-full text-left py-2 text-white hover:text-red-500 transition-colors flex items-center font-bebas"
                  >
                    <FontAwesomeIcon
                      icon={type === "body" ? faDumbbell : faAppleAlt}
                      className="mr-2"
                    />
                    {type === "body" ? "Body Part Workouts" : "Diet Plans"}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ml-2 transition-transform ${activeDropdown === type ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === type && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {type === "body"
                          ? ["Chest", "Back", "Legs", "Core"].map((item) => (
                              <motion.li
                                key={item}
                                onClick={() => navigate(`/${item.toLowerCase()}`)}
                                className="text-white hover:text-red-500 cursor-pointer py-2 font-bebas font-bold"
                                whileHover={{ scale: 1.05, x: 10 }}
                              >
                                <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                                {item}
                              </motion.li>
                            ))
                          : ["Muscle Gain", "Fat Loss", "Shredded"].map((item, index) => (
                              <motion.li
                                key={item}
                                onClick={() => handleDietSelect(item)}
                                className="text-white hover:text-red-500 cursor-pointer py-2 font-bebas font-bold"
                                whileHover={{ scale: 1.05, x: 10 }}
                              >
                                <FontAwesomeIcon icon={[faHandFist, faFire, faDragon][index]} className="mr-2" />
                                {item}
                              </motion.li>
                            ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <button
                  onClick={() => navigate("/cardio")}
                  className="w-full text-left py-2 text-white hover:text-red-500 transition-colors flex items-center font-bebas"
                >
                  <FontAwesomeIcon icon={faHeartPulse} className="mr-2" />
                  Cardio
                </button>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <button
                  onClick={() => navigate("/warmup")}
                  className="w-full text-left py-2 text-white hover:text-red-500 transition-colors flex items-center font-bebas"
                >
                  <FontAwesomeIcon icon={faRunning} className="mr-2" />
                  Warm-Up
                </button>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <button
                  onClick={() => navigate("/game")}
                  className="w-full text-left py-2 text-white hover:text-red-500 transition-colors flex items-center font-bebas"
                >
                  <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                  Play Game
                </button>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <button
                  onClick={handleContactClick}
                  className="w-full text-left py-2 text-white hover:text-red-500 transition-colors flex items-center font-bebas"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contact Me
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const DropdownContent: React.FC<{
  type: string
  onDietSelect?: (dietType: string) => void
  onMouseLeave: () => void
}> = ({ type, onDietSelect, onMouseLeave }) => {
  const navigate = useNavigate()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onMouseLeave()
    }, 700)
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-red-600 bg-black/95 backdrop-blur-sm p-4 shadow-xl"
    >
      <motion.ul className="space-y-2 font-bebas font-bold">
        {type === "body"
          ? ["Chest", "Back", "Legs", "Core"].map((item) => (
              <motion.li
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className="text-white hover:text-red-500 cursor-pointer py-2"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                {item}
              </motion.li>
            ))
          : ["Muscle Gain", "Fat Loss", "Shredded"].map((item, index) => (
              <motion.li
                key={item}
                onClick={() => onDietSelect?.(item)}
                className="text-white hover:text-red-500 cursor-pointer py-2"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FontAwesomeIcon icon={[faHandFist, faFire, faDragon][index]} className="mr-2" />
                {item}
              </motion.li>
            ))}
      </motion.ul>
    </motion.div>
  )
}

export default Navbar