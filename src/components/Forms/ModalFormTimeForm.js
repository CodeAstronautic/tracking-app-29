import React from "react";

import TimerForm from "./TimerForm";

const ToggleableTimerForm = ({ times, setTimes, handleInputChange , settask , task ,setIsOpen}) => {
  return (
    <TimerForm
      times={times}
      setTimes={setTimes}
      handleInputChange={handleInputChange}
      settask={settask}
      task={task}
      setIsOpen={setIsOpen}
    />
  );
};

export default ToggleableTimerForm;
