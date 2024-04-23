// import React, { useEffect, useState } from 'react';

// const WIDTH = 800;
// const HEIGHT = 600;
// const CELL_SIZE = 30;
// const WALL_COLOR = '#000';        // Black
// const PATH_COLOR = '#FFF';        // White
// const PLAYER_COLOR = '#F00';      // Red
// const GOAL_COLOR = '#888';        // Gray

// function MazeGame() {
//     const [maze, setMaze] = useState([]);
//     const [playerX, setPlayerX] = useState(0);
//     const [playerY, setPlayerY] = useState(0);
//     const [goalX, setGoalX] = useState(0);
//     const [goalY, setGoalY] = useState(0);

//     // Generate maze using Recursive Backtracking algorithm
//     useEffect(() => {
//         function generateMaze(width, height) {
//             const newMaze = Array.from({ length: height }, () => Array.from({ length: width }, () => 1));

//             // Set the outer border walls
//             for (let y = 0; y < height; y++) {
//                 for (let x = 0; x < width; x++) {
//                     if (x < 2 || x >= width - 2 || y < 2 || y >= height - 2) {
//                         newMaze[y][x] = 1;
//                     }
//                 }
//             }

//             const stack = [[2, 2]];  // Start the maze generation from an inner cell
//             const visited = new Set(['2,2']);

//             while (stack.length > 0) {
//                 const [x, y] = stack[stack.length - 1];
//                 const neighbors = [[x, y - 2], [x, y + 2], [x - 2, y], [x + 2, y]].filter(([nx, ny]) => nx > 0 && nx < width - 2 && ny > 0 && ny < height - 2 && !visited.has(`${nx},${ny}`));

//                 if (neighbors.length > 0) {
//                     const [nx, ny] = neighbors[Math.floor(Math.random() * neighbors.length)];
//                     newMaze[ny][nx] = 0;
//                     newMaze[y + (ny - y) / 2][x + (nx - x) / 2] = 0;
//                     stack.push([nx, ny]);
//                     visited.add(`${nx},${ny}`);
//                 } else {
//                     stack.pop();
//                 }
//             }

//             // Place the goal on the opposite side of the maze
//             const goalY = Math.random() < 0.5 ? 2 : height - 3;  // Place the goal either at the top or bottom row
//             const goalX = Math.floor(Math.random() * (width - 5)) + 2;  // Randomly select a column for the goal
//             newMaze[goalY][goalX] = 2;  // Represent the goal with a different value

//             return newMaze;
//         }

//         setMaze(generateMaze(WIDTH / CELL_SIZE, HEIGHT / CELL_SIZE));

//         // Generate a valid starting position for the player
//         while (true) {
//             const playerX = Math.floor(Math.random() * (maze[0].length - 5)) + 2;
//             const playerY = Math.floor(Math.random() * (maze.length - 5)) + 2;
//             if (maze[playerY][playerX] === 0) {
//                 setPlayerX(playerX);
//                 setPlayerY(playerY);
//                 break;
//             }
//         }

//         // Generate goal position
//         const goalY = Math.random() < 0.5 ? 2 : HEIGHT / CELL_SIZE - 3; // Place the goal either at the top or bottom row
//         const goalX = Math.floor(Math.random() * (WIDTH / CELL_SIZE - 5)) + 2; // Randomly select a column for the goal
//         setGoalX(goalX);
//         setGoalY(goalY);
//     }, []);

//     // Reset game
//     function resetGame() {
//         setMaze(generateMaze(WIDTH / CELL_SIZE, HEIGHT / CELL_SIZE));
//         // Generate a valid starting position for the player
//         while (true) {
//             const playerX = Math.floor(Math.random() * (maze[0].length - 5)) + 2;
//             const playerY = Math.floor(Math.random() * (maze.length - 5)) + 2;
//             if (maze[playerY][playerX] === 0) {
//                 setPlayerX(playerX);
//                 setPlayerY(playerY);
//                 break;
//             }
//         }
//     }

//     // Event handling
//     function handleKeyDown(event) {
//         // Player movement logic...
//     }

//     return (
//         <canvas
//             width={WIDTH}
//             height={HEIGHT}
//             onKeyDown={handleKeyDown}
//             tabIndex="0"
//             style={{ border: '1px solid black' }}
//         />
//     );
// }

// export default MazeGame;
