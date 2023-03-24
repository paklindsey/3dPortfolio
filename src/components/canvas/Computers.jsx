import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
//helpers to help us draw on the canvas
// useGLTF is what will allow us to import 3d models
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // will not start with a div for 3d compoents, will start with a mesh
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    // camera is the most important part of any 3d scene, where are we looking at the scene from ?
    // position args: [x, y, z]
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* suspense is not from three, its is from React and allows us to have a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // will allow us to only rotate the object around a specific axis
          maxPolarAngle={Math.PI / 2}
          min
          PolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
