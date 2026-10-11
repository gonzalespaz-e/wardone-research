import { BUILDINGS, WORLD_HALF } from "./buildings";

export default function World() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 20, 10]} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[WORLD_HALF * 2, WORLD_HALF * 2]} />
        <meshStandardMaterial color="lightgrey" />
      </mesh>

      {/* Buildings */}
      {BUILDINGS.map((b, i) => (
        <mesh key={i} position={b.position}>
          <boxGeometry args={b.size} />
          <meshStandardMaterial color="gray" />
        </mesh>
      ))}
    </>
  );
}