import React from "react";

// import TimerForm from '../Forms/TimerForm'
import Timer from "../ListTask/TimerData";

const EditableTimer = (props) => {
  return (
    <Timer
      id={props.id}
      title={props.title}
      project={props.project}
      elapsed={props.elapsed}
      runningSince={props.runningSince}
      onTrashClick={props.onTrashClick}
      onStartClick={props.onStartClick}
      onStopClick={props.onStopClick}
    />
   
  );
};

export default EditableTimer;
