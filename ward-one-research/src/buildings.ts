// Each building: center position [x, y, z] and size [width, height, depth]
export const BUILDINGS = [
    { position: [0, 2, -12], size: [10, 4, 6] },
    { position: [-10, 1.5, -4], size: [4, 3, 4] },
    { position: [10, 2.5, -2], size: [5, 5, 4] },
    { position: [-8, 1, 8], size: [3, 2, 6] },
] as const;

export const WORLD_HALF = 20; // ground goes from -20 to 20