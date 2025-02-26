"use client"

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
  MutableRefObject,
  forwardRef,
} from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Vector3, Color } from "three"
import { useNavigate } from "react-router-dom"

// --- Subcomponents ---

// PlayerCar – loads the player's car model.
const PlayerCar = forwardRef<any, { position: [number, number, number] }>(
  ({ position }, ref) => {
    const { scene } = useGLTF("/models/playerCar.gltf") as any
    return <primitive object={scene} ref={ref} position={position} scale={[0.5, 0.5, 0.5]} />
  }
)

// PoliceCar – chases the player's car.
const PoliceCar: React.FC<{ position: [number, number, number]; target: MutableRefObject<any> }> = ({
  position,
  target,
}) => {
  const ref = useRef<any>()
  const { scene } = useGLTF("/models/policeCar.gltf") as any
  useFrame(() => {
    if (target.current && ref.current) {
      const direction = new Vector3().subVectors(target.current.position, ref.current.position).normalize()
      ref.current.position.add(direction.multiplyScalar(0.1))
    }
  })
  return <primitive object={scene} ref={ref} position={position} scale={[0.5, 0.5, 0.5]} />
}

// BonusCoin – rotates continuously.
const BonusCoin: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const ref = useRef<any>()
  const { scene } = useGLTF("/models/coin.gltf") as any
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 2
    }
  })
  return <primitive object={scene} ref={ref} position={position} scale={[0.3, 0.3, 0.3]} />
}

// Hazard – represents an oil/dirt patch that slows the car.
const Hazard: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <mesh position={position} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  )
}

// RaceTrack – renders a long plane whose material color cycles over time.
const RaceTrack: React.FC = () => {
  const meshRef = useRef<any>()
  useFrame((state, delta) => {
    if (meshRef.current) {
      const color = new Color()
      color.setHSL((state.clock.getElapsedTime() * 0.05) % 1, 0.5, 0.1)
      meshRef.current.material.color = color
    }
  })
  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[20, 2000]} />
      <meshStandardMaterial color="#222" />
    </mesh>
  )
}

// --- Types for obstacles ---
type ObstacleType = "coin" | "powerup" | "hazard"
type Obstacle = {
  id: number
  x: number
  z: number
  type: ObstacleType
  collected: boolean
  speed: number
}

// GameController – updates player movement and collision detection.
const GameController: React.FC<{
  playerRef: MutableRefObject<any>
  obstacles: Obstacle[]
  setObstacles: React.Dispatch<React.SetStateAction<Obstacle[]>>
  onGameOver: () => void
  onCollectBonus: (value: number) => void
  setSlowMessage: React.Dispatch<React.SetStateAction<string>>
  invincible: boolean
}> = ({
  playerRef,
  obstacles,
  setObstacles,
  onGameOver,
  onCollectBonus,
  setSlowMessage,
  invincible,
}) => {
  const keys = useRef<{ [key: string]: boolean }>({})

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key] = true
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false
    }
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  const baseSpeed = 0.5
  let currentSpeed = baseSpeed

  useFrame(() => {
    if (playerRef.current) {
      if (keys.current["ArrowLeft"]) playerRef.current.position.x -= currentSpeed * 0.6
      if (keys.current["ArrowRight"]) playerRef.current.position.x += currentSpeed * 0.6
      if (keys.current["ArrowUp"]) playerRef.current.position.z -= currentSpeed
      if (keys.current["ArrowDown"]) playerRef.current.position.z += currentSpeed

      if (Math.abs(playerRef.current.position.x) > 9) {
        if (!invincible) onGameOver()
      }

      obstacles.forEach((obs) => {
        if (obs.collected) return
        const dx = playerRef.current.position.x - obs.x
        const dz = playerRef.current.position.z - obs.z
        const distance = Math.sqrt(dx * dx + dz * dz)
        if (distance < 2) {
          if (obs.type === "coin") {
            onCollectBonus(5)
            obs.collected = true
          } else if (obs.type === "powerup") {
            onCollectBonus(0) // Trigger invincibility externally.
            obs.collected = true
          } else if (obs.type === "hazard") {
            if (!invincible) {
              currentSpeed = baseSpeed * 0.3
              setSlowMessage("Hey! Watch where you're driving!")
              setTimeout(() => {
                currentSpeed = baseSpeed
                setSlowMessage("")
              }, 3000)
            }
          }
        }
      })

      setObstacles((prev) =>
        prev.filter((obs) => obs.z < playerRef.current.position.z + 20 && !obs.collected)
      )
    }
  })

  return null
}

// --- Main CarRacingGame Component ---
const CarRacingGame: React.FC = () => {
  const [gameState, setGameState] = useState<"start" | "playing" | "gameover">("start")
  const [score, setScore] = useState(0)
  const [slowMessage, setSlowMessage] = useState("")
  const [invincible, setInvincible] = useState(false)
  const playerCarRef = useRef<any>(null)
  const [obstacles, setObstacles] = useState<Obstacle[]>([])
  const [nextObstacleId, setNextObstacleId] = useState(1)

  // Spawn obstacles randomly.
  useEffect(() => {
    if (gameState !== "playing") return
    const spawnInterval = setInterval(() => {
      setObstacles((prev) => [
        ...prev,
        {
          id: nextObstacleId,
          x: (Math.random() - 0.5) * 10,
          z: -Math.random() * 1000 - 20,
          type: Math.random() < 0.6 ? "coin" : Math.random() < 0.8 ? "hazard" : "powerup",
          collected: false,
          speed: 0.1 + Math.random() * 0.2,
        },
      ])
      setNextObstacleId((id) => id + 1)
    }, 1500)
    return () => clearInterval(spawnInterval)
  }, [gameState, nextObstacleId])

  useEffect(() => {
    if (obstacles.some((o) => o.type === "powerup" && o.collected)) {
      setInvincible(true)
      setTimeout(() => setInvincible(false), 5000)
    }
  }, [obstacles])

  const startGame = () => {
    setScore(0)
    setObstacles([])
    setGameState("playing")
    setInvincible(false)
    if (playerCarRef.current) {
      playerCarRef.current.position.set(0, 0.5, 0)
    }
  }

  const handleGameOver = () => {
    setGameState("gameover")
  }

  const handleCollectBonus = (value: number) => {
    setScore((prev) => prev + value)
  }

  return (
    <div className="min-h-screen bg-black text-white font-bebas pt-20 px-4 flex flex-col items-center relative">
      {gameState === "start" && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Futuristic Car Racing</h1>
          <p className="mb-4">
            Race through neon-lit roads, dodge hazards, collect coins, grab power-ups, and outrun the cops!
          </p>
          <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full">
            Start Race
          </button>
        </div>
      )}
      {gameState === "playing" && (
        <>
          <Canvas shadows camera={{ position: [0, 5, 15], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <RaceTrack />
            <PlayerCar position={[0, 0.5, 0]} ref={playerCarRef} />
            <PoliceCar position={[3, 0.5, -5]} target={playerCarRef} />
            {obstacles.map((obs) => {
              if (obs.collected) return null
              if (obs.type === "coin" || obs.type === "powerup") {
                return <BonusCoin key={obs.id} position={[obs.x, 0.5, obs.z]} />
              } else {
                return <Hazard key={obs.id} position={[obs.x, 0.01, obs.z]} />
              }
            })}
            <GameController
              playerRef={playerCarRef}
              obstacles={obstacles}
              setObstacles={setObstacles}
              onGameOver={handleGameOver}
              onCollectBonus={handleCollectBonus}
              setSlowMessage={setSlowMessage}
              invincible={invincible}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
          <div className="absolute top-24 left-4 text-2xl font-bold text-white z-50">
            Score: {score}
          </div>
          {invincible && (
            <div className="absolute top-24 right-4 text-2xl font-bold text-yellow-400 z-50">
              INVINCIBLE!
            </div>
          )}
          {slowMessage && (
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-xl text-red-400 z-50">
              {slowMessage}
            </div>
          )}
        </>
      )}
      {gameState === "gameover" && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Game Over</h1>
          <p className="mb-4">Your final score: {score}</p>
          <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full mb-4">
            Restart Race
          </button>
        </div>
      )}
      {gameState === "playing" && (
        <div className="fixed bottom-0 left-0 right-0 h-32 md:hidden">
          <div className="grid grid-cols-3 h-full">
            <div className="bg-black/20 backdrop-blur-sm" />
            <div className="bg-black/20 backdrop-blur-sm" />
            <div className="bg-black/20 backdrop-blur-sm" />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            Touch left/right to steer
          </div>
        </div>
      )}
    </div>
  )
}

export default CarRacingGame;
