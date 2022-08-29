import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { renderElapsedString } from "../../helper/helpers";

import TimerActionButton from "../Button/TimerActionButton";
import TimerControlButtons from "../Button/TimerControlButtons";

const Timer = (props) => {
  const [newTime, setTime] = useState();
  const [newTimeOne, setTimeOne] = useState(false);
  const [newState, setnewState] = useState("00:00:00");
  useEffect(() => {
    let datas = setInterval(() => {
      if (props.runningSince) {
        setTimeOne(true);
        const elapsedString = renderElapsedString(
          props.elapsed,
          props.runningSince
        );
        setnewState(elapsedString);
      }
    }, 500);
    setTime(datas);
  }, [props.runningSince]);
  useEffect(() => {
    if (newTimeOne && props.runningSince === null) {
      setTimeOne(false);
      clearInterval(newTime);
    }
  }, [props.runningSince, newTimeOne, newTime]);
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 mt-4">
      <Card>
        <Card.Header>Task Details</Card.Header>
        <div className="text-center">
          <Card.Text> Title : {props.title}</Card.Text>
          <Card.Text>Project : {props.project}</Card.Text>
        </div>
        <Card.Body>
          <h3 className="text-center">{newState}</h3>
        </Card.Body>
        <TimerControlButtons
          id={props.id}
          onTrashClick={props.onTrashClick}
          onEditClick={props.onEditClick}
        />
        <TimerActionButton
          timerIsRunning={!!props.runningSince}
          onStartClick={() => props.onStartClick(props.id)}
          onStopClick={() => props.onStopClick(props.id)}
        />
      </Card>
    </div>
  );
};

export default Timer;
