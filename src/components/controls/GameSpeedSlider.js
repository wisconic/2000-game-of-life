import React from "react";
import Slider from "@material-ui/core/Slider";

import { sliderMarks } from "../../helpers/constants";

function GameSpeedSlider(props) {
  const { gameSpeed, running, setGameSpeed } = props;

  return (
    <Slider
      label={"milliseconds"}
      value={gameSpeed}
      disabled={running}
      onChange={(e, newValue) => {
        setGameSpeed(newValue);
      }}
      min={100}
      max={1000}
      step={100}
      valueLabelDisplay='auto'
      marks={sliderMarks}
    />
  );
}

export default GameSpeedSlider;
