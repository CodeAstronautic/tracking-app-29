import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import EditableTimerList from "../EditForms/EditFormTimeList";
import ToggleableTimerForm from "../Forms/ModalFormTimeForm";
import { newTimer } from "../../helper/helpers";
import { Modal } from "react-bootstrap";
const timer = {
  title: "",
  project: "",
  id: uuid,
  elapsed: 0,
  runningSince: Date.now(),
};
function TimerDashboard({ show, setIsOpen }) {
  const [times, setTimes] = useState(timer);
  const [task, settask] = useState([]);
  const updateTimer = (attrs) => {
    const timerUpdatedata = times.map((timer) => {
      if (timer.id === attrs.id) {
        return Object.assign({}, timer, {
          title: attrs.title,
          project: attrs.project,
        });
      } else {
        return timer;
      }
    });
    setTimes(timerUpdatedata);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTimes({
      ...times,
      [name]: value,
    });
  };
  
  const deleteTimer = (timerId) => {
    setTimes(times.filter((t) => t.id !== timerId));
  };
  const startTimer = (timerId) => {
    const now = Date.now();
    const timerData = task.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, runningSince: now };
      } else {
        return timer;
      }
    });
    settask([...timerData]);
  };
  const stopTimer = (timerId) => {
    const now = Date.now();
    const timerData = task.map((timer) => {
      if (timer.id === timerId) {
        const lastElapsed = now - timer.runningSince;
        return Object.assign({}, timer, {
          elapsed: timer.elapsed + lastElapsed,
          runningSince: null,
        });
      } else {
        return timer;
      }
    });
    settask(timerData);
  };
  return (
    <>
      <EditableTimerList
        timers={task}
        onFormSubmit={(attrs) => updateTimer(attrs)}
        onTrashClick={(timerId) => deleteTimer(timerId)}
        onStartClick={(timerId) => startTimer(timerId)}
        onStopClick={(timerId) => stopTimer(timerId)}
        settask={settask}
      />
      <Modal show={show} >
        <ToggleableTimerForm
          times={times}
          setTimes={setTimes}
          handleInputChange={handleInputChange}
          settask={settask}
          task={task}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </>
  );
}

export default TimerDashboard;
