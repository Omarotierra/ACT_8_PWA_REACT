import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Col, Form, Row, InputGroup, Card } from 'react-bootstrap';
import '../Styles/Contact.css';
import axios from 'axios';

const Contact = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required('Nombre completo es requerido'),
    lastName: yup.string().required('Apellidos son requeridos'),
    email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    message: yup.string().required('Mensaje es requerido'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/send_message', values);
      alert('Mensaje enviado correctamente');
      resetForm();
    } catch (error) {
      alert('Hubo un error al enviar el mensaje');
    }
  };

  return (
    <Card className="p-4 custom-card">
      <Card.Title className="text-center">Contacto</Card.Title>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="validationFormik03">
              <Form.Label>Correo electrónico</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="validationFormik04" className="mt-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="mt-4">Enviar</Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default Contact;
