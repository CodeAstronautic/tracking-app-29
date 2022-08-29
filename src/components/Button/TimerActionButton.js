import React from "react";
import { Button } from "react-bootstrap";

const TimerActionButton = (props) => {
  if (props.timerIsRunning) {
    return (
      <Button variant="danger" onClick={props.onStopClick}>
        Stop
      </Button>
    );
  } else {
    return (
      <Button variant="success" onClick={props.onStartClick}>
        Start
      </Button>
    );
  }
};

export default TimerActionButton;
