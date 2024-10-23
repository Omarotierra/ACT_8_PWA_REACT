import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [goalTitle, setGoalTitle] = useState('');

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (goalTitle) {
      setGoals([...goals, { title: goalTitle }]);
      setGoalTitle('');
    }
  };

  return (
    <Container className="my-4">
      <h2>Metas de Ahorro</h2>
      <Form onSubmit={handleAddGoal}>
        <Form.Group controlId="formGoalTitle">
          <Form.Label>Añadir Nueva Meta</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ejemplo: Viaje a la playa"
            value={goalTitle}
            onChange={(e) => setGoalTitle(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agregar Meta</Button>
      </Form>
      
      <Row className="mt-4">
        {goals.map((goal, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{goal.title}</Card.Title>
                <Card.Text>
                  Aquí puedes añadir detalles sobre tu meta.
                </Card.Text>
                <Button variant="danger" onClick={() => {
                  const newGoals = goals.filter((g, i) => i !== index);
                  setGoals(newGoals);
                }}>Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Goals;
