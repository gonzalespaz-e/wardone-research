import { Canvas } from "@react-three/fiber";
import World from "./World";
import Player from "./player";

export default function App() {
  return (
    <Canvas>
      <World />
      <Player />
    </Canvas>
  );
}