import React from "react";
import { produce } from "immer";
// helpers & constants ⬇️
import createEmptyGrid from "../helpers/createEmptyGrid";
import { numColumns, numRows, neighborOperations } from "../helpers/constants";
// components ⬇️
import GameSpeedSlider from "./controls/GameSpeedSlider";
import GameButtonGroup from "./controls/GameButtonGroup";
import GameZoneGrid from "./GameZoneGrid";

function GameZone() {
  const [grid, setGrid] = React.useState(() => createEmptyGrid());
  const [running, setRunning] = React.useState(false);
  const [count, setCount] = React.useState(0); // generation count
  const [gameSpeed, setGameSpeed] = React.useState(500);

  // persists 'running' state reference to prevent unnecessary re-renders during grid (generation) updates
  const isRunningRef = React.useRef(running);
  isRunningRef.current = running;

  const runGameOfLife = React.useCallback(() => {
    if (!isRunningRef.current) {
      return;
    }
    setGrid((currentGrid) => {
      return produce(currentGrid, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numColumns; j++) {
            let neighbors = 0;
            neighborOperations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (
                newI >= 0 &&
                newI < numRows &&
                newJ >= 0 &&
                newJ < numColumns
              ) {
                neighbors += currentGrid[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (currentGrid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setCount((count) => (count += 1));
    setTimeout(() => {
      runGameOfLife();
    }, gameSpeed);
  }, [gameSpeed]);

  return (
    <div>
      <p style={{ textAlign: "center" }}>Generation: {count} </p>
      <GameZoneGrid grid={grid} running={running} setGrid={setGrid} />
      <div className='controls container'>
        <GameButtonGroup
          running={running}
          isRunningRef={isRunningRef}
          setRunning={setRunning}
          setCount={setCount}
          setGrid={setGrid}
          runGameOfLife={runGameOfLife}
        />
        <GameSpeedSlider
          gameSpeed={gameSpeed}
          running={running}
          setGameSpeed={setGameSpeed}
        />
      </div>
    </div>
  );
}

export default GameZone;
