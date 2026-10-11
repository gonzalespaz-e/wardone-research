import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import World from "./World";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 15, 25] }}>
      <World />
      <OrbitControls />
    </Canvas>
  );
}