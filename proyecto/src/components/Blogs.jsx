import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Styles/Blogs.css'; // Puedes personalizar aún más los estilos aquí

const Blogs = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Blogs sobre Finanzas Personales</h1>
      <p>Aquí encontrarás artículos sobre cómo manejar tu dinero, ahorrar y evitar deudas.</p>

      <Row className="mb-4">
        <Col md={8}>
          <Card.Body>
            <Card.Title>Cómo ahorrar de manera eficiente</Card.Title>
            <Card.Text>
              Aprender a ahorrar de manera eficiente es clave para mejorar tu salud financiera. Aquí te contamos los mejores consejos.
            </Card.Text>
            <a href="https://fin-tomaseliasgonzalezbenitez.com/ahorrar-forma-eficiente/" className="btn btn-primary">Leer Más</a>
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.i9U82UaxH5bm4JQR2AlerwHaHa?rs=1&pid=ImgDetMain"
          />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <Card.Body>
            <Card.Title>Inversiones inteligentes</Card.Title>
            <Card.Text>
              Las inversiones inteligentes son cruciales para hacer crecer tu dinero a largo plazo. Explora cómo invertir de manera segura.
            </Card.Text>
            <a href="#blog2" className="btn btn-primary">Leer Más</a>
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.M7jz1gWmCF62ivyZKmjejQHaFC?rs=1&pid=ImgDetMain"
          />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <Card.Body>
            <Card.Title>Evitar las deudas</Card.Title>
            <Card.Text>
              Conoce las mejores estrategias para evitar las deudas y mantener un buen control de tus finanzas personales.
            </Card.Text>
            <a href="#blog3" className="btn btn-primary">Leer Más</a>
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.G2ncVKDY3TrQN1lWDRwMmwHaEK?rs=1&pid=ImgDetMain"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;

