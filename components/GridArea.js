import { Row, Col } from "reactstrap";

const GridArea = () => {
  return (
    <Row className="grid-row">
      <Col className="grid-col grid-col-1" xl="6" lg="6" md="6" sm="12">
       <h3>Recent Projects</h3>
       <p>Having meaningful, unique branding has the power to align your business with the right people. Explore some recently celebrated projects and get inspired to start your own.</p>
       <a href="">Visit Portfolio</a>
      </Col>
      <Col className="grid-col grid-col-2" xl="6" lg="6" md="6" sm="12">
        
      </Col>
      <Col className="grid-col grid-col-3" xl="6" lg="6" md="6" sm="12">
       
      </Col>
      <Col className="grid-col grid-col-4" xl="6" lg="6" md="6" sm="12">
        <h3>Services</h3>
        <p>No matter the project, you'll be guided through every step of the design process. Ready to take the first step towards holistically transforming your business?</p>
        <a href="">View Offerings</a>
      </Col>
    </Row>
  );
}

export default GridArea;