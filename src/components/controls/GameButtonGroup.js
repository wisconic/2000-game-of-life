import React from "react";
import Button from "@material-ui/core/Button";
// helpers & constants ⬇️
import createEmptyGrid from "../../helpers/createEmptyGrid";
import { numColumns, numRows } from "../../helpers/constants";

function GameButtonGroup(props) {
  const {
    running,
    isRunningRef,
    setRunning,
    setCount,
    setGrid,
    runGameOfLife,
  } = props;

  return (
    <>
      <Button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            isRunningRef.current = true;
            runGameOfLife();
          }
        }}
      >
        {running ? "stop" : "start"}
      </Button>
      <Button
        onClick={() => {
          setRunning(false);
          setCount(0);
          setGrid(createEmptyGrid());
        }}
      >
        clear
      </Button>
      <Button
        onClick={() => {
          if (running) {
            return;
          }
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numColumns), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(rows);
          setCount(0);
        }}
      >
        random
      </Button>
    </>
  );
}

export default GameButtonGroup;
