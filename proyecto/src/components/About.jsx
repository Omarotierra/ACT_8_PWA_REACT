import React from 'react'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Styles/About.css'; 

function About() {
  return (
    <Container className="mt-5">
    <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.PwFgxuuQOPuQvaoJ_HOgrwHaFS?rs=1&pid=ImgDetMain" />
            <Card.Body>
            <Card.Title>Nuestra Visión</Card.Title>
          <Card.Text>
            Ser un referente en el ámbito financiero, facilitando herramientas y conocimientos para que 
            las personas gestionen sus finanzas personales de manera eficiente y alcancen la independencia económica.
          </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.kwfgPMRf64cbXWvCB_BYDwHaE8?rs=1&pid=ImgDetMain" />
            <Card.Body>
            <Card.Title>Nuestra Misión</Card.Title>
          <Card.Text>
            Proveer soluciones innovadoras y accesibles que ayuden a nuestros usuarios a mejorar su salud financiera. 
            Nos comprometemos a ofrecer educación, herramientas de ahorro e inversión que apoyen el crecimiento económico.
          </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://reisdigital.es/wp-content/uploads/2022/10/pasos-para-elaborar-un-objetivo-aprende-a-definir-tus-objetivos-y-alcanzarlos.jpg" />
            <Card.Body>
            <Card.Title>Nuestro Objetivo</Card.Title>
          <Card.Text>
            Ayudar a individuos y familias a establecer metas financieras claras y alcanzables, optimizando el uso 
            de sus recursos a través de la planificación y la inversión responsable.
          </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
  );
}

export default About;
