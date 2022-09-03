import { Row, Col } from "reactstrap";

const HeroArea = () => {
  return (
    <Row className="row1">
      <Col className="col1" xl="8" lg="6" md="6" sm="12">
        <h1 className="heroHeader">Terapia Psicológica genuina, amable y compasiva</h1>
        <p className="heroSubtitle">Apoyándote a crear una vida plena y presente</p>
        <a href="/services" className="heroLink">Ver Servicios</a>
      </Col>
      <Col className="col2" xl="4" lg="6" md="6" sm="12" />
    </Row>
  );
}

export default HeroArea;