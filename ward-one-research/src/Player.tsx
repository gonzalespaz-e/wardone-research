import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";

const SPEED = 0.1; // how far the player moves each frame

export default function Player({ name }: { name: string }) {
  // A handle to the player's box so we can move it
  const playerRef = useRef<THREE.Mesh>(null);

  // Remembers which keys are being held down, e.g. { w: true }
  const keys = useRef<Record<string, boolean>>({});

  // Listen for key presses (runs once when the player appears)
  useEffect(() => {
    window.addEventListener("keydown", (e) => { keys.current[e.key] = true; });
    window.addEventListener("keyup", (e) => { keys.current[e.key] = false; });
  }, []);

  // This runs every frame (about 60 times per second)
  useFrame(({ camera }) => {
    const player = playerRef.current;
    if (!player) return;

    // Move the player
    if (keys.current["w"]) player.position.z -= SPEED; // forward
    if (keys.current["s"]) player.position.z += SPEED; // back
    if (keys.current["a"]) player.position.x -= SPEED; // left
    if (keys.current["d"]) player.position.x += SPEED; // right

    // Put the camera behind and above the player, looking at it
    camera.position.set(player.position.x, 8, player.position.z + 12);
    camera.lookAt(player.position);
  });

  return (
    <mesh ref={playerRef} position={[0, 1, 4]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="royalblue" />
      {/* Name tag floating above the box */}
      <Html position={[0, 1.5, 0]} center>
        <div style={{ background: "white", padding: "2px 6px", borderRadius: 4 }}>
          {name}
        </div>
      </Html>
    </mesh>
  );
}