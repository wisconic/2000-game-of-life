import React from "react";

function SidebarInfo() {
  return (
    <div className='game-rules'>
      <h3>Rules of the Game:</h3>
      <ul>
        If the cell is alive:
        <li>AND has exactly 2-3 neighbors...it remains alive</li>
      </ul>
      <ul>
        If the cell is dead:
        <li>AND has exactly 3 neighbors...it comes to life</li>
      </ul>
      <h3> FAQ </h3>
      <ul>
        How do I play?
        <li>Bring a cell to life by clicking on it in the grid</li>
        <li>Click start to begin the simulation</li>
        <li>Stop and/or clear with stop the simulation</li>
        <li>You can click "random" to generate a randomized grid</li>
        <li>Use slider to set the timeout between each generation</li>
      </ul>
      <ul>
        How do I know which cells are dead?
        <li>White cells on the grid are 'dead'; black cells are 'alive'</li>
      </ul>
      <ul>
        What is a neighbor?
        <li>
          Each cell will have up to 8 neighbors we need to check for signs of
          life
        </li>
        <li>...up, down, lef, right, and all 4 diagonals</li>
      </ul>
      <ul>
        Will the simulation stop by itself?
        <li>
          NO - you must stop the simulation even if it reaches a final state
        </li>
      </ul>
    </div>
  );
}

export default SidebarInfo;
