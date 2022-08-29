import React from "react";

import EditableTimer from "./EditFormTime";

const EditableTimerList = (props) => {
  return (
    <div className="d-flex row">
      {props?.timers?.length > 0 &&
        props?.timers?.map((timer) => (
          <EditableTimer
            key={timer.id}
            {...timer}
            onFormSubmit={props.onFormSubmit}
            onTrashClick={props.onTrashClick}
            onStartClick={props.onStartClick}
            onStopClick={props.onStopClick}
          />
        ))}
    </div>
  );
};

export default EditableTimerList;
