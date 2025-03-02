import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Image, RoundedBox } from '@react-three/drei';
import { Vector3, Group } from 'three';
import { useSpring, animated } from '@react-spring/three';

interface ModelCardProps {
  model: {
    id: string;
    name: string;
    avatar: string;
    parameters: string;
    bio: string;
    interests: string[];
    color: string;
  };
  active: boolean;
  position: Vector3;
  rotation: [number, number, number];
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ 
  model, 
  active, 
  position, 
  rotation,
  onSwipeLeft,
  onSwipeRight
}) => {
  const cardRef = useRef<Group>(null);
  const initialY = position.y;
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  // Spring animations for card position and scale
  const { cardPosition, cardScale, cardOpacity } = useSpring({
    cardPosition: [
      position.x + (active ? dragX : 0), 
      position.y, 
      active ? position.z : position.z - 0.5
    ],
    cardScale: active ? (hovered ? 1.05 : 1) : 0.8,
    cardOpacity: active ? 1 : 0.6,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Reset drag position when card changes
  useEffect(() => {
    setDragX(0);
  }, [model.id]);
  
  // Add floating animation
  useFrame((state) => {
    if (cardRef.current && active && !dragging) {
      // Use type assertion to avoid type error
      (cardRef.current.position as any).y = initialY + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05;
    }
  });

  // Handle pointer events
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!active) return;
    setDragging(true);
    e.stopPropagation();
  };

  const handlePointerUp = () => {
    if (!active) return;
    setDragging(false);
    
    // Check if swipe threshold is met
    if (dragX < -1.5) {
      onSwipeLeft();
    } else if (dragX > 1.5) {
      onSwipeRight();
    }
    
    // Reset position
    setDragX(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!active || !dragging) return;
    
    // Calculate drag distance based on pointer movement
    const x = (e.clientX - size.width / 2) / aspect;
    setDragX(x * 0.01); // Scale down the movement
  };

  return (
    <animated.group
      ref={cardRef}
      position={cardPosition}
      rotation={rotation}
      scale={cardScale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      visible={cardOpacity.to((v: number) => v > 0.01)}
    >
      {/* Card background */}
      <RoundedBox args={[3, 4.5, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#ffffff" />
      </RoundedBox>

      {/* Header with gradient */}
      <RoundedBox args={[3, 0.8, 0.12]} radius={0.1} smoothness={4} position={[0, 1.85, 0.01]}>
        <meshStandardMaterial color={model.color} />
      </RoundedBox>

      {/* Profile image */}
      <group position={[0, 1.2, 0.06]}>
        <Image 
          url={model.avatar} 
          transparent 
          scale={[1.2, 1.2, 1]} 
          position={[0, 0, 0.06]}
        />
        <RoundedBox args={[1.3, 1.3, 0.05]} radius={0.65} smoothness={4} position={[0, 0, 0.02]}>
          <meshStandardMaterial color="#ffffff" />
        </RoundedBox>
      </group>

      {/* Model name */}
      <Text
        position={[0, 1.85, 0.12]}
        fontSize={0.3}
        color="white"
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        {model.name}
      </Text>

      {/* Parameters (like age in dating apps) */}
      <Text
        position={[0, 0.5, 0.12]}
        fontSize={0.18}
        color="#333333"
        font="/fonts/Inter-Medium.woff"
        anchorX="center"
        anchorY="middle"
      >
        {model.parameters} parameters
      </Text>

      {/* Bio */}
      <Text
        position={[0, 0, 0.12]}
        fontSize={0.14}
        color="#666666"
        font="/fonts/Inter-Regular.woff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        textAlign="center"
      >
        {model.bio}
      </Text>

      {/* Interests */}
      <group position={[0, -0.7, 0.12]}>
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.16}
          color="#333333"
          font="/fonts/Inter-SemiBold.woff"
          anchorX="center"
          anchorY="middle"
        >
          Interests
        </Text>
        
        {model.interests.map((interest, i) => (
          <RoundedBox 
            key={i} 
            args={[interest.length * 0.09 + 0.2, 0.25, 0.02]} 
            radius={0.125} 
            smoothness={4} 
            position={[(i - 1) * 0.8, 0, 0]}
          >
            <meshStandardMaterial color={model.color} opacity={0.2} transparent />
            <Text
              position={[0, 0, 0.02]}
              fontSize={0.12}
              color="#333333"
              font="/fonts/Inter-Medium.woff"
              anchorX="center"
              anchorY="middle"
            >
              {interest}
            </Text>
          </RoundedBox>
        ))}
      </group>

      {/* Swipe instructions */}
      {active && (
        <Text
          position={[0, -1.8, 0.12]}
          fontSize={0.14}
          color="#999999"
          font="/fonts/Inter-Regular.woff"
          anchorX="center"
          anchorY="middle"
        >
          Swipe left to pass, right to match
        </Text>
      )}

      {/* Like/Dislike buttons */}
      {active && (
        <>
          <group position={[-1, -1.4, 0.12]} onClick={onSwipeLeft}>
            <RoundedBox args={[0.6, 0.6, 0.05]} radius={0.3} smoothness={4}>
              <meshStandardMaterial color="#ff4757" />
            </RoundedBox>
            <Text
              position={[0, 0, 0.03]}
              fontSize={0.3}
              color="white"
              font="/fonts/Inter-Bold.woff"
              anchorX="center"
              anchorY="middle"
            >
              ✕
            </Text>
          </group>
          
          <group position={[1, -1.4, 0.12]} onClick={onSwipeRight}>
            <RoundedBox args={[0.6, 0.6, 0.05]} radius={0.3} smoothness={4}>
              <meshStandardMaterial color="#2ed573" />
            </RoundedBox>
            <Text
              position={[0, 0, 0.03]}
              fontSize={0.3}
              color="white"
              font="/fonts/Inter-Bold.woff"
              anchorX="center"
              anchorY="middle"
            >
              ♥
            </Text>
          </group>
        </>
      )}
    </animated.group>
  );
};

export default ModelCard;
