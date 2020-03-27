import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default () => (
  <Container>
    <Row>
      <Col sm={12} className="text-center">
        <h1 className="oswald title-home">
          &nbsp;Bienvenido al Sistema&nbsp;
                </h1>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="text-center">
          <b>Seleccione alguna opcion</b>
        </p>
      </Col>
    </Row>
  </Container>

)