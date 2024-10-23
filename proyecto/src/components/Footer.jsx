import React from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Row, Col } from "react-bootstrap";
import '../Styles/Footer.css';  // Asegúrate de tener este archivo de estilos en la carpeta correcta.

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li>Email: financaspersonales@example.com</li>
                            <li>Teléfono: +52 272 708 1767</li>
                        </ul>
                        <h5>Síguenos</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/finanzaspersonales" className="text-white">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/finanzaspersonales" className="text-white">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.tiktok.com/@finanzaspersonales" className="text-white">
                                    <i className="fab fa-tiktok fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Información</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/sobre-nosotros" className="text-black">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="/terminos-y-condiciones" className="text-black">Términos y Condiciones</a>
                            </li>
                            <li>
                                <a href="/politica-de-privacidad" className="text-black">Política de Privacidad</a>
                            </li>
                            <li>
                                <a href="/recursos" className="text-black">Recursos Financieros</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center">
                        <h5>Pagos Seguros</h5>
                        <img
                            src="https://mshopsoficiales.kubocloud.com/mx/chabeloshops/bancos.svg"
                            alt="Pagos Seguros"
                            width="200"
                        />
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <p className="mb-0">
                        &copy; 2024 AhorroSoft. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
