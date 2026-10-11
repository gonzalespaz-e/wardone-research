import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import World from "./World";
import Player from "./player";

export default function App() {
  const [typed, setTyped] = useState(""); // what's in the text box
  const [name, setName] = useState("");   // the name once they press Start

  return (
    <>
      {/* Show the name box until a name is entered */}
      {!name && (
        <form
          onSubmit={(e) => {
            e.preventDefault(); // stop the page from reloading
            if (typed.trim() !== "") setName(typed.trim());
          }}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        >
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Enter your name"
            maxLength={16}
          />
          <button type="submit">Start</button>
        </form>
      )}

      <Canvas>
        <World />
        {/* Only show the player after a name is entered */}
        {name && <Player name={name} />}
      </Canvas>
    </>
  );
}