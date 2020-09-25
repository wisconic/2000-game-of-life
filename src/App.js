import React from "react";

import SidebarInfo from "./components/SidebarInfo";
import GameZone from "./components/GameZone";
import "./App.css";

function App() {
  return (
    <>
      <div className='Header'>
        <h1>Conway's Game of Life</h1>
      </div>
      <div className='App'>
        <SidebarInfo />
        <GameZone />
      </div>
    </>
  );
}

export default App;
