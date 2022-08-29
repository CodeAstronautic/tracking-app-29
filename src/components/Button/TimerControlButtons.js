import React from "react";
// import { Card } from "react-bootstrap";

const visibleButtonsStyle = {
  visibility: "visible",
  opacity: 1,
  transition: "opacity .25s ease-in",
};

const hiddenButtonsStyle = {
  visibility: "hidden",
  opacity: 0,
  transition: "opacity .25s ease-in",
};

const TimerControlButtons = (props) => {
  return (
    <div>
      <div
        style={props.showButtons ? visibleButtonsStyle : hiddenButtonsStyle}
      >
        <span className="right floated">
          <p onClick={props.onEditClick} style={{ cursor: "pointer" }}>
            delete
          </p>
        </span>
        <span className="right floated">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => props.onTrashClick(props.id)}
          >
            delete
          </p>
        </span>
      </div>
    </div>
  );
};

export default TimerControlButtons;
