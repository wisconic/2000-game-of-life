import React from "react";
import { produce } from "immer";

import { numColumns } from "../helpers/constants";

function GameZoneGrid(props) {
  const { grid, running, setGrid } = props;

  return (
    <div
      className='grid'
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 20px)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, j) => (
          <div
            key={`${i}-${j}`}
            onClick={() => {
              // if already running simulation --> do not allow clicks (per project requirements)
              if (running) {
                return;
              }
              // produce() allows use to write as if we are modifying state
              // -->it returns a modified copy with the changes
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[i][j] = grid[i][j] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][j] ? "black" : undefined,
              border: "solid 1px #333",
            }}
          ></div>
        ))
      )}
    </div>
  );
}

export default GameZoneGrid;
