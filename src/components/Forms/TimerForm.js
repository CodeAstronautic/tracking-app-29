import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const TimerForm = ({
  times,
  setTimes,
  handleInputChange,
  settask,
  task,
  setIsOpen,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const new_items = {
      id: uuid(),
      title: times.title,
      project: times.project,
      elapsed: 0,
    };
    settask([ ...task, new_items]);
    setTimes("")
    setIsOpen(false);
  };
  const submitText = "Create";
  return (
    <Card
      style={{
        width: "30rem",
        margin: "auto",
        marginTop: "21px",
      }}
    >
      <Card.Body>
        <Card.Title>Create Task</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name.."
              value={times.title}
              name="title"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Project</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter  project.."
              value={times?.project}
              name="project"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {submitText}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TimerForm;
