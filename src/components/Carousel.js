import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Physics, usePlane } from '@react-three/cannon';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

const Shelf = () => {
  usePlane(() => ({ position: [0, -3, 0], rotation: [-Math.PI / 0, 2, 0] }));

  return (
    <>
      {/* Shelf Geometry */}
      <mesh position={[0, -4, 0]} rotation={[0, 3.9, 0]}>
        <boxGeometry args={[15, 0.3, 1]} />
        <meshStandardMaterial color="#fff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>

      {/* Spotlight above the shelf to simulate a glow */}
      <spotLight
        position={[0, -2, 0]}   // Position above the shelf
        angle={Math.PI / 4}       // Angle of the spotlight
        penumbra={100}              // Softness of the light
        intensity={70}             // Light intensity
        color="#ffffff"          // White light
        castShadow
        target-position={[10, 30, 20  ]} // Pointing downwards
      />
    </>
  );
};

// Text component for About Me button with hover effect
const AboutMeButton = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false); // Track hover state

  const handleClick = () => {
    navigate('/profile'); // Navigate to Profile.js
  };

  return (
    <Text
      position={[0, -1.8, 0]} // Position the text above the shelf
      fontSize={0.6} // Adjust the font size
      color={hovered ? 'white' : 'grey'} // Change color on hover
      anchorX="center" // Align text horizontally to center
      anchorY="middle" // Align text vertically to middle
      rotation={[Math.PI / 70, 0.3, 0]}
      onClick={handleClick} // Navigate on click
      onPointerOver={() => setHovered(true)} // Set hovered to true
      onPointerOut={() => setHovered(false)} // Set hovered to false
      style={{ cursor: 'pointer' }} // Show pointer cursor on hover
    >
      About Me
    </Text>
  );
};

// Text component for Skills button with hover effect
const SkillsButton = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false); // Track hover state

  const handleClick = () => {
    navigate('/skills'); // Navigate to Skills.js
  };

  return (
    <Text
      position={[0, 0, 0]} // Position the text above the shelf
      fontSize={0.6} // Larger font size for emphasis
      color={hovered ? 'white' : 'grey'} // Change color on hover
      anchorX="center" // Align text horizontally to center
      anchorY="middle" // Align text vertically to middle
      rotation={[Math.PI / 70, 7.2, 0]}
      onClick={handleClick} // Navigate on click
      onPointerOver={() => setHovered(true)} // Set hovered to true
      onPointerOut={() => setHovered(false)} // Set hovered to false
      style={{ cursor: 'pointer' }} // Show pointer cursor on hover
    >
      Skills
    </Text>
  );
};


// Text component for Projects button with hover effect
const ProjectsButton = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false); 

  const handleClick = () => {
    navigate('/Projects'); 
  };

  return (
    <Text
      position={[0, 1.6, 0]} // Position the text above the shelf
      fontSize={0.6} // Larger font size for emphasis
      color={hovered ? 'white' : 'grey'} // Change color on hover
      anchorX="center" // Align text horizontally to center
      anchorY="middle" // Align text vertically to middle
      rotation={[Math.PI / 70, 7, 0]}
      onClick={handleClick} // Navigate on click
      onPointerOver={() => setHovered(true)} // Set hovered to true
      onPointerOut={() => setHovered(false)} // Set hovered to false
      style={{ cursor: 'pointer' }} // Show pointer cursor on hover
    >
      My Projects
    </Text>
  );
};

// Invisible boundaries to keep the objects within the visible area
const Boundaries = () => {
  usePlane(() => ({ position: [-3.5, 0, 0], rotation: [0, Math.PI / 2, 0] }));
  usePlane(() => ({ position: [3.5, 0, 0], rotation: [0, -Math.PI / 2, 0] }));
  usePlane(() => ({ position: [0, 0, -2.5], rotation: [0, 0, 0] }));
  usePlane(() => ({ position: [0, 0, 2.5], rotation: [0, Math.PI, 0] }));

  return null;
};

const FixedCamera = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(5, 5, 5); // Set an initial position to view the shelf at an angle
    camera.lookAt(0, 0, 0); // Look at the center of the scene
  }, [camera]);
  return null;
};

const Carousel = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%', background: '#161616' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Shelf />
        <Boundaries />
      </Physics>
      <AboutMeButton />
      <SkillsButton />
      <ProjectsButton />
      <FixedCamera />
      <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
    </Canvas>
  );
};

export default Carousel;
