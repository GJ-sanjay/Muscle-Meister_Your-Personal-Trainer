import type React from "react"
import { type ReactNode, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faHandFist, faFire, faDragon } from "@fortawesome/free-solid-svg-icons"

interface TabProps {
  children: ReactNode
  tab: string
  handleSetSelected: (val: string | null) => void
  selected: string | null
}

const Tab: React.FC<TabProps> = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? "bg-red-600 text-white" : "text-white"
      }`}
    >
      <span>{children}</span>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`transition-transform ${selected === tab ? "rotate-180" : ""}`}
      />
    </button>
  )
}

interface ContentProps {
  selected: string | null
  dir: "l" | "r" | null
}

const Content: React.FC<ContentProps> = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-64 rounded-lg border border-red-600 bg-black p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {selected === "body" && (
        <motion.ul
          initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="space-y-2"
        >
          <motion.li className="text-white hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.1 }}>
            Chest
          </motion.li>
          <motion.li className="text-white hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.1 }}>
            Back
          </motion.li>
          <motion.li className="text-white hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.1 }}>
            Legs
          </motion.li>
        </motion.ul>
      )}

      {selected === "diet" && (
        <motion.ul
          initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="space-y-2"
        >
          <motion.li className="text-white hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.1 }}>
            <FontAwesomeIcon icon={faHandFist} className="mr-2" />
            Muscle Gain
          </motion.li>
          <motion.li className="text-white hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.1 }}>
            <FontAwesomeIcon icon={faFire} className="mr-2" />
            Fat Loss
          </motion.li>
          <motion.li className="text-white hover:text-red-500 cursor-pointer" whileHover={{ scale: 1.1 }}>
            <FontAwesomeIcon icon={faDragon} className="mr-2" />
            Shredded
          </motion.li>
        </motion.ul>
      )}
    </motion.div>
  )
}

const Bridge = () => <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />

const Nub = ({ selected }: { selected: string | null }) => {
  const [left, setLeft] = useState(0)

  useEffect(() => {
    moveNub()
  }, [selected])

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`)
      const overlayContent = document.getElementById("overlay-content")

      if (!hoveredTab || !overlayContent) return

      const tabRect = hoveredTab.getBoundingClientRect()
      const { left: contentLeft } = overlayContent.getBoundingClientRect()

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

      setLeft(tabCenter)
    }
  }

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-red-600 bg-black"
    />
  )
}

export const ShiftingDropDown: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [dir, setDir] = useState<"l" | "r" | null>(null)

  const handleSetSelected = (val: string | null) => {
    if (selected && val) {
      setDir(selected > val ? "r" : "l")
    } else if (val === null) {
      setDir(null)
    }

    setSelected(val)
  }

  return (
    <div onMouseLeave={() => handleSetSelected(null)} className="relative flex h-fit gap-2">
      <Tab selected={selected} handleSetSelected={handleSetSelected} tab="body">
        Body Part Workouts
      </Tab>
      <Tab selected={selected} handleSetSelected={handleSetSelected} tab="diet">
        Diet Plans
      </Tab>

      <AnimatePresence>{selected && <Content dir={dir} selected={selected} />}</AnimatePresence>
    </div>
  )
}
export default ShiftingDropDown


