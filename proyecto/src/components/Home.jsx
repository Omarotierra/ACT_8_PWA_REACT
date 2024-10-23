import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css';
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Bienvenido a nuestra Plataforma Financiera</h1>
      <p className="text-center mb-4">
      Encuentra toda la información que necesitas sobre precios de criptomonedas, noticias financieras actualizadas y blogs sobre ahorro y finanzas.
      </p>
      <Row>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.651d2a3c2c0954ea9717f53b87cbf02a?rik=shsF5qtPG5b9GQ&pid=ImgRaw&r=0"
              alt="Primer diapostiva"
            />
            <Carousel.Caption>
              <h3>Cryptomonedas</h3>
              <p>Averigua el precio de las criptomonedas aquí</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.sitiosespana.com/wp-content/uploads/2020/05/Forex-y-criptomonedas.jpg"
              alt="Segunda Diapositiva"
            />
            <Carousel.Caption>
              <h3>Segunda Diapositiva</h3>
              <p>Descripción de la segunda diapositiva.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.236eae054ddb0882637520a8ae80faf6?rik=LzQnp%2bWf%2bNuQ5w&pid=ImgRaw&r=0"
              alt="Tercera Diapositiva"
            />
            <Carousel.Caption>
              <h3>Tercera Diapositiva</h3>
              <p>Descripción de la tercera diapositiva.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.8EYkgRRrXfFd_dpLIcn2_gHaE8?rs=1&pid=ImgDetMain" />
            <Card.Body>
              <Card.Title>Precios de Criptomonedas</Card.Title>
              <Card.Text>
                Consulta las tasas de cambio actuales de las principales criptomonedas.
              </Card.Text>
              <Link to="/cryptorates">
                <Button variant="primary">Ver Precios</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.ngdNhmltzroqj2MxjlQoIgHaE8?rs=1&pid=ImgDetMain" />
            <Card.Body>
              <Card.Title>Noticias Financieras</Card.Title>
              <Card.Text>
                Mantente al día con las últimas noticias sobre finanzas y mercados.
              </Card.Text>
              <Link to="/financeNews">
                <Button variant="primary">Leer Noticias</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.AOOggO1oyMtCTD6Ep2MdhgHaEo?rs=1&pid=ImgDetMain" />
            <Card.Body>
              <Card.Title>Blogs Financieros</Card.Title>
              <Card.Text>
                Explora nuestros blogs sobre ahorro, inversión y herramientas financieras.
              </Card.Text>
              <Link to="/blogs">
                <Button variant="primary">Leer Blogs</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </Container>
  );
}

export default Home;
