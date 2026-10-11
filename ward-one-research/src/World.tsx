import { BUILDINGS, WORLD_HALF } from "./buildings";

export default function World() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[20, 30, 10]} intensity={1.5} castShadow />

      {/* Ground plane, rotated flat and sized to the world bounds. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[WORLD_HALF * 2, WORLD_HALF * 2]} />
        <meshStandardMaterial color="#6f7d6a" />
      </mesh>

      {BUILDINGS.map((b) => (
        <mesh key={b.name} position={b.position} castShadow receiveShadow>
          <boxGeometry args={b.size} />
          <meshStandardMaterial color={b.color} />
        </mesh>
      ))}
    </>
  );
}
