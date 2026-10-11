// position = center of the box [x, y, z]; size = [width, height, depth]
// y = height / 2 so each box sits on the ground.
export type Building = {
    name: string;
    position: [number, number, number];
    size: [number, number, number];
    color: string;
};

export const BUILDINGS: Building[] = [
    { name: "Coliseum (stand-in)", position: [0, 2, -12], size: [10, 4, 6], color: "#9aa3ad" },
    { name: "Building A", position: [-10, 1.5, -4], size: [4, 3, 4], color: "#b0b7bf" },
    { name: "Building B", position: [10, 2.5, -2], size: [5, 5, 4], color: "#a4abb3" },
    { name: "Building C", position: [-8, 1, 8], size: [3, 2, 6], color: "#bcc2c8" },
    { name: "Building D", position: [9, 1.5, 9], size: [6, 3, 3], color: "#99a1aa" },
];

// The ground is a square from -WORLD_HALF to +WORLD_HALF on x and z.
export const WORLD_HALF = 20;