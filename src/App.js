import React, { useState } from "react";
import TimersDashboard from "./components/Dashboard/TimersDashboard";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Time Tracking App</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="button-create">
        <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>
          Create Task
        </Button>
      </div>
      <TimersDashboard show={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default App;
