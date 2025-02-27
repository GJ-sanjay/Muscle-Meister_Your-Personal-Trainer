import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Game constants
const GAME_WIDTH = 360;
const GAME_HEIGHT = 600;
const ROAD_WIDTH = 320;
const LANE_WIDTH = ROAD_WIDTH / 3;
const CAR_WIDTH = 40;
const CAR_HEIGHT = 80;
const OBSTACLE_SIZE = 40;
const INITIAL_SPEED = 3;
const MAX_SPEED = 12;
const ACCELERATION = 0.02;
const STEERING_SPEED = 4;
const POLICE_CHASE_DELAY = 2000; // ms before police appears
const BUILDING_FREQUENCY = 0.02;

// Game types
type GameState = "start" | "playing" | "gameover";
type ObstacleType = "oil" | "booster" | "shield" | "coin";
type BuildingPosition = "left" | "right";

interface Obstacle {
  id: number;
  x: number;
  y: number;
  type: ObstacleType;
  active: boolean;
}

interface Building {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  position: BuildingPosition;
}

interface PlayerState {
  x: number;
  y: number;
  speed: number;
  angle: number; // for steering effect
  isShielded: boolean;
  isBoosting: boolean;
}

interface PoliceState {
  x: number;
  y: number;
  active: boolean;
  catchingUp: boolean;
}

const CarRacingGame: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [distance, setDistance] = useState(0);
  const [player, setPlayer] = useState<PlayerState>({
    x: GAME_WIDTH / 2 - CAR_WIDTH / 2,
    y: GAME_HEIGHT - CAR_HEIGHT - 40,
    speed: INITIAL_SPEED,
    angle: 0,
    isShielded: false,
    isBoosting: false
  });
  const [police, setPolice] = useState<PoliceState>({
    x: GAME_WIDTH / 2 - CAR_WIDTH / 2,
    y: GAME_HEIGHT + 100,
    active: false,
    catchingUp: false
  });
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [powerupTimer, setPowerupTimer] = useState<number | null>(null);
  const [isSteeringLeft, setIsSteeringLeft] = useState(false);
  const [isSteeringRight, setIsSteeringRight] = useState(false);
  const [isBoosting, setIsBoosting] = useState(false);
  const gameLoopRef = useRef<number | null>(null);
  const lastObstacleTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const roadPositionRef = useRef<number>(0);
  const policeTimerRef = useRef<number | null>(null);

  // Game assets
  const roadImage = "https://img.freepik.com/free-vector/highway-road-desert-landscape-day-time_107791-10158.jpg";
  const playerCarImage = "https://cdn-icons-png.flaticon.com/512/741/741407.png"; // Sports car
  const policeCarImage = "https://cdn-icons-png.flaticon.com/512/2554/2554936.png"; // Police car
  const oilImage = "https://cdn-icons-png.flaticon.com/512/2933/2933939.png";
  const boosterImage = "https://cdn-icons-png.flaticon.com/512/1584/1584892.png";
  const shieldImage = "https://cdn-icons-png.flaticon.com/512/1507/1507275.png";
  const coinImage = "https://cdn-icons-png.flaticon.com/512/2933/2933116.png";
  const buildingColors = ["#333333", "#444444", "#555555", "#666666"];

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;

      switch (e.key) {
        case "ArrowLeft":
          setIsSteeringLeft(true);
          break;
        case "ArrowRight":
          setIsSteeringRight(true);
          break;
        case "ArrowUp":
          setIsBoosting(true);
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          setIsSteeringLeft(false);
          break;
        case "ArrowRight":
          setIsSteeringRight(false);
          break;
        case "ArrowUp":
          setIsBoosting(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  // Generate random obstacle
  const generateObstacle = useCallback(() => {
    const now = Date.now();
    if (now - lastObstacleTimeRef.current < 1000) return;
    
    lastObstacleTimeRef.current = now;
    
    // Random position within road bounds
    const roadLeftEdge = (GAME_WIDTH - ROAD_WIDTH) / 2;
    const x = roadLeftEdge + Math.random() * (ROAD_WIDTH - OBSTACLE_SIZE);
    
    // Random obstacle type
    const types: ObstacleType[] = ["oil", "booster", "shield", "coin"];
    const weights = [0.4, 0.2, 0.2, 0.6]; // Higher number = more common
    
    let totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    let selectedType: ObstacleType = "oil";
    
    for (let i = 0; i < types.length; i++) {
      if (random < weights[i]) {
        selectedType = types[i];
        break;
      }
      random -= weights[i];
    }
    
    setObstacles(prev => [
      ...prev,
      {
        id: Date.now(),
        x,
        y: -OBSTACLE_SIZE,
        type: selectedType,
        active: true
      }
    ]);
  }, []);

  // Generate buildings
  const generateBuildings = useCallback(() => {
    if (Math.random() > BUILDING_FREQUENCY) return;
    
    const roadLeftEdge = (GAME_WIDTH - ROAD_WIDTH) / 2;
    const position: BuildingPosition = Math.random() > 0.5 ? "left" : "right";
    const width = 30 + Math.random() * 40;
    const height = 80 + Math.random() * 120;
    
    const x = position === "left" 
      ? Math.max(0, roadLeftEdge - width - Math.random() * 20)
      : roadLeftEdge + ROAD_WIDTH + Math.random() * 20;
    
    setBuildings(prev => [
      ...prev,
      {
        id: Date.now(),
        x,
        y: -height,
        width,
        height,
        position
      }
    ]);
  }, []);

  // Check collisions
  const checkCollisions = useCallback(() => {
    const playerRect = {
      left: player.x,
      right: player.x + CAR_WIDTH,
      top: player.y,
      bottom: player.y + CAR_HEIGHT
    };

    // Check obstacle collisions
    setObstacles(prev => prev.map(obstacle => {
      if (!obstacle.active) return obstacle;

      const obstacleRect = {
        left: obstacle.x,
        right: obstacle.x + OBSTACLE_SIZE,
        top: obstacle.y,
        bottom: obstacle.y + OBSTACLE_SIZE
      };

      // Check for collision
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        // Handle collision based on obstacle type
        switch (obstacle.type) {
          case "oil":
            if (!player.isShielded) {
              // Slow down and make steering more difficult temporarily
              setPlayer(prev => ({
                ...prev,
                speed: Math.max(prev.speed * 0.7, INITIAL_SPEED * 0.5)
              }));
            }
            break;
          case "booster":
            handleBoost();
            break;
          case "shield":
            handleShield();
            break;
          case "coin":
            setScore(prev => prev + 50);
            break;
        }
        return { ...obstacle, active: false };
      }
      return obstacle;
    }));

    // Check police collision
    if (police.active) {
      const policeRect = {
        left: police.x,
        right: police.x + CAR_WIDTH,
        top: police.y,
        bottom: police.y + CAR_HEIGHT
      };

      if (
        playerRect.left < policeRect.right &&
        playerRect.right > policeRect.left &&
        playerRect.top < policeRect.bottom &&
        playerRect.bottom > policeRect.top
      ) {
        if (!player.isShielded) {
          setGameState("gameover");
        } else {
          // Shield protects from police once
          setPlayer(prev => ({ ...prev, isShielded: false }));
          setPolice(prev => ({ 
            ...prev, 
            y: prev.y + 200, // Push police back
            catchingUp: true 
          }));
        }
      }
    }

    // Check road boundaries
    const roadLeftEdge = (GAME_WIDTH - ROAD_WIDTH) / 2;
    const roadRightEdge = roadLeftEdge + ROAD_WIDTH;
    
    if (playerRect.left < roadLeftEdge || playerRect.right > roadRightEdge) {
      if (!player.isShielded) {
        setGameState("gameover");
      } else {
        // Shield protects from boundary once
        setPlayer(prev => ({ 
          ...prev, 
          isShielded: false,
          x: Math.max(roadLeftEdge, Math.min(roadRightEdge - CAR_WIDTH, prev.x))
        }));
      }
    }
  }, [player, police]);

  // Handle boost powerup
  const handleBoost = () => {
    // Clear existing powerup timer
    if (powerupTimer !== null) {
      clearTimeout(powerupTimer);
    }

    setPlayer(prev => ({ ...prev, isBoosting: true }));
    setPlayer(prev => ({ ...prev, speed: Math.min(prev.speed * 1.5, MAX_SPEED) }));
    
    setPowerupTimer(window.setTimeout(() => {
      setPlayer(prev => ({ ...prev, isBoosting: false }));
      setPowerupTimer(null);
    }, 3000));
  };

  // Handle shield powerup
  const handleShield = () => {
    // Clear existing powerup timer
    if (powerupTimer !== null) {
      clearTimeout(powerupTimer);
    }

    setPlayer(prev => ({ ...prev, isShielded: true }));
    
    setPowerupTimer(window.setTimeout(() => {
      setPlayer(prev => ({ ...prev, isShielded: false }));
      setPowerupTimer(null);
    }, 5000));
  };

  // Start police chase
  const startPoliceChase = useCallback(() => {
    setPolice(prev => ({
      ...prev,
      active: true,
      y: GAME_HEIGHT + 100,
      catchingUp: true
    }));
  }, []);

  // Game loop
  const gameLoop = useCallback(() => {
    if (gameState !== "playing") return;

    frameCountRef.current += 1;
    
    // Update road position (for scrolling effect)
    roadPositionRef.current += player.speed;
    if (roadPositionRef.current >= 600) {
      roadPositionRef.current = 0;
    }

    // Move player based on steering input
    setPlayer(prev => {
      let newX = prev.x;
      let newAngle = prev.angle;
      
      if (isSteeringLeft) {
        newX -= STEERING_SPEED;
        newAngle = Math.max(prev.angle - 2, -15);
      } else if (isSteeringRight) {
        newX += STEERING_SPEED;
        newAngle = Math.min(prev.angle + 2, 15);
      } else {
        // Return to center angle when not steering
        newAngle = prev.angle > 0 ? Math.max(prev.angle - 1, 0) : Math.min(prev.angle + 1, 0);
      }
      
      return {
        ...prev,
        x: newX,
        angle: newAngle
      };
    });

    // Apply boost if button is pressed
    if (isBoosting && !player.isBoosting) {
      handleBoost();
    }

    // Update obstacles
    setObstacles(prev => 
      prev
        .filter(obs => obs.y < GAME_HEIGHT) // Remove off-screen obstacles
        .map(obs => ({
          ...obs,
          y: obs.y + player.speed
        }))
    );

    // Update buildings
    setBuildings(prev => 
      prev
        .filter(building => building.y < GAME_HEIGHT) // Remove off-screen buildings
        .map(building => ({
          ...building,
          y: building.y + player.speed * 0.8 // Buildings move slightly slower for parallax
        }))
    );

    // Update police car
    if (police.active) {
      setPolice(prev => {
        let newY = prev.y;
        let newX = prev.x;
        
        // Police follows player's x position with some delay
        const targetX = player.x;
        newX += (targetX - newX) * 0.03;
        
        // Police tries to catch up if behind
        if (prev.catchingUp) {
          newY -= 1; // Police moves up (towards player)
          
          // If police gets close enough, switch to normal following
          if (player.y - newY < 200) {
            newY = player.y + 150; // Stay at a fixed distance behind player
            return { ...prev, y: newY, x: newX, catchingUp: false };
          }
        } else {
          // Maintain distance
          newY = player.y + 150;
        }
        
        return { ...prev, y: newY, x: newX };
      });
    }

    // Generate new obstacles
    if (frameCountRef.current % 60 === 0) {
      generateObstacle();
    }

    // Generate buildings
    generateBuildings();

    // Check for collisions
    checkCollisions();

    // Update score and distance
    setDistance(prev => prev + player.speed / 10);
    setScore(prev => prev + Math.floor(player.speed / 5));
    
    // Gradually increase speed if not boosting
    if (!player.isBoosting) {
      setPlayer(prev => ({
        ...prev,
        speed: Math.min(prev.speed + ACCELERATION, MAX_SPEED)
      }));
    }

    // Continue the game loop
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [
    gameState,
    isSteeringLeft,
    isSteeringRight,
    isBoosting,
    player,
    police,
    generateObstacle,
    generateBuildings,
    checkCollisions
  ]);

  // Start/stop game loop based on game state
  useEffect(() => {
    if (gameState === "playing") {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
      
      // Start police chase after delay
      policeTimerRef.current = window.setTimeout(startPoliceChase, POLICE_CHASE_DELAY);
    } else if (gameState === "gameover") {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      
      if (policeTimerRef.current) {
        clearTimeout(policeTimerRef.current);
      }
      
      // Update high score
      if (score > highScore) {
        setHighScore(score);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      
      if (policeTimerRef.current) {
        clearTimeout(policeTimerRef.current);
      }
    };
  }, [gameState, gameLoop, score, highScore, startPoliceChase]);

  // Start the game
  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setDistance(0);
    setPlayer({
      x: GAME_WIDTH / 2 - CAR_WIDTH / 2,
      y: GAME_HEIGHT - CAR_HEIGHT - 40,
      speed: INITIAL_SPEED,
      angle: 0,
      isShielded: false,
      isBoosting: false
    });
    setPolice({
      x: GAME_WIDTH / 2 - CAR_WIDTH / 2,
      y: GAME_HEIGHT + 100,
      active: false,
      catchingUp: false
    });
    setObstacles([]);
    setBuildings([]);
    frameCountRef.current = 0;
    lastObstacleTimeRef.current = 0;
    roadPositionRef.current = 0;
  };

  // Return to main menu
  const returnToMenu = () => {
    navigate('/main');
  };

  return (
    <div className="min-h-screen pt-20 px-4 relative z-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        {gameState === "start" && (
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-red-500 mb-6">GETAWAY DRIVER</h1>
            <p className="text-gray-300 mb-8">
              Outrun the police, dodge obstacles, and collect power-ups in this high-speed chase!
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={startGame}
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-xl font-bold transition-all transform hover:scale-105"
              >
                START RACE
              </button>
              <button
                onClick={returnToMenu}
                className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all"
              >
                Back to Menu
              </button>
            </div>
          </div>
        )}

        {/* Game container */}
        <div 
          ref={gameContainerRef}
          className={`relative overflow-hidden rounded-lg shadow-2xl border-2 border-red-500 ${gameState === "start" ? "hidden" : "block"}`}
          style={{ 
            width: GAME_WIDTH, 
            height: GAME_HEIGHT,
            backgroundColor: "#222"
          }}
        >
          {/* Road background with scrolling effect */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${roadImage})`,
              backgroundSize: 'cover',
              backgroundPosition: `center ${roadPositionRef.current}px`,
              backgroundRepeat: 'repeat-y',
              width: GAME_WIDTH,
              height: GAME_HEIGHT * 2,
              top: -roadPositionRef.current % GAME_HEIGHT
            }}
          />

          {/* Buildings */}
          {buildings.map(building => (
            <div
              key={building.id}
              className="absolute"
              style={{
                left: building.x,
                top: building.y,
                width: building.width,
                height: building.height,
                backgroundColor: buildingColors[Math.floor(Math.random() * buildingColors.length)],
                boxShadow: '0 0 10px rgba(0,0,0,0.5)'
              }}
            />
          ))}

          {/* Road boundaries */}
          <div 
            className="absolute top-0 bottom-0 bg-white"
            style={{ 
              left: (GAME_WIDTH - ROAD_WIDTH) / 2 - 5,
              width: 5
            }}
          />
          <div 
            className="absolute top-0 bottom-0 bg-white"
            style={{ 
              left: (GAME_WIDTH - ROAD_WIDTH) / 2 + ROAD_WIDTH,
              width: 5
            }}
          />

          {/* Lane markings */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute left-1/2 w-4 h-12 bg-white bg-opacity-80"
                style={{ 
                  marginLeft: -2,
                  top: ((i * 40) - roadPositionRef.current) % GAME_HEIGHT
                }}
              />
            ))}
          </div>

          {/* Obstacles */}
          {obstacles.filter(o => o.active).map(obstacle => (
            <div
              key={obstacle.id}
              className="absolute"
              style={{
                width: OBSTACLE_SIZE,
                height: OBSTACLE_SIZE,
                left: obstacle.x,
                top: obstacle.y,
                backgroundImage: `url(${
                  obstacle.type === "oil" 
                    ? oilImage 
                    : obstacle.type === "booster" 
                      ? boosterImage 
                      : obstacle.type === "shield" 
                        ? shieldImage 
                        : coinImage
                })`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: obstacle.type === "shield" || obstacle.type === "booster" 
                  ? 'drop-shadow(0 0 5px #44ffff)' 
                  : 'none',
                zIndex: 10
              }}
            />
          ))}

          {/* Police car */}
          {police.active && (
            <div
              className="absolute"
              style={{
                width: CAR_WIDTH,
                height: CAR_HEIGHT,
                left: police.x,
                top: police.y,
                backgroundImage: `url(${policeCarImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'drop-shadow(0 0 5px #0000ff)',
                zIndex: 20
              }}
            >
              {/* Police lights */}
              <div className="absolute top-0 left-0 right-0 flex justify-center">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse ml-2" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          )}

          {/* Player car */}
          <div
            className={`absolute transition-transform ${player.isShielded ? 'ring-4 ring-blue-500 ring-opacity-70 rounded-full' : ''}`}
            style={{
              width: CAR_WIDTH,
              height: CAR_HEIGHT,
              left: player.x,
              top: player.y,
              backgroundImage: `url(${playerCarImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: player.isBoosting ? 'drop-shadow(0 0 8px #ff4444)' : 'none',
              transform: `rotate(${player.angle}deg) scale(${player.isBoosting ? 1.1 : 1})`,
              zIndex: 30
            }}
          >
            {/* Boost effect */}
            {player.isBoosting && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 bg-gradient-to-t from-red-600 to-yellow-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          {/* Game over overlay */}
          {gameState === "gameover" && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
              <h2 className="text-4xl font-bold text-red-500 mb-4">BUSTED!</h2>
              <p className="text-2xl text-white mb-2">Score: {score}</p>
              <p className="text-xl text-gray-400 mb-6">High Score: {highScore}</p>
              <div className="flex gap-4">
                <button
                  onClick={startGame}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-bold"
                >
                  RETRY
                </button>
                <button
                  onClick={returnToMenu}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg"
                >
                  MENU
                </button>
              </div>
            </div>
          )}

          {/* HUD */}
          {gameState === "playing" && (
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-black bg-opacity-50 z-40">
              <div className="text-white font-bold">SCORE: {score}</div>
              <div className="text-white font-bold">SPEED: {Math.floor(player.speed * 20)} km/h</div>
            </div>
          )}

          {/* Mobile controls */}
          {gameState === "playing" && (
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between z-40">
              <button
                className="bg-black bg-opacity-50 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                onTouchStart={() => setIsSteeringLeft(true)}
                onTouchEnd={() => setIsSteeringLeft(false)}
              >
                ←
              </button>
              <button
                className="bg-red-600 bg-opacity-70 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl"
                onTouchStart={() => setIsBoosting(true)}
                onTouchEnd={() => setIsBoosting(false)}
              >
                BOOST
              </button>
              <button
                className="bg-black bg-opacity-50 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                onTouchStart={() => setIsSteeringRight(true)}
                onTouchEnd={() => setIsSteeringRight(false)}
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Game instructions */}
        {gameState === "playing" && (
          <div className="mt-4 text-gray-300 text-sm">
            <p>Use ← → arrow keys to steer, ↑ to boost</p>
            <p>Avoid oil slicks, collect boosters and shields!</p>
            <p>Don't get caught by the police or drive off the road!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CarRacingGame;