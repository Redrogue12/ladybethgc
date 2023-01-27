import Head from 'next/head';
import { Row, Col } from "reactstrap";
// https://www.npmjs.com/package/react-static-google-map
import {
  StaticGoogleMap,
  Marker,
} from 'react-static-google-map';

const Services = () => {
    const url = 'https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyBeMjkAMl1R2iZCiiIMWcNGZthnRE-04ok'

  return (
    <div className="p-4 primary-bg h-100">
      <Head>
        <title>Contacto - Ladybeth González-Cortés, LCC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className="main-container">
          <Row>
            <Col className="contact-column p-4">
              <h1 className="text-center primary-color mb-4">Contacto</h1>
              <p className="font-weight-bold">Teléfono</p>
              <p>+1 (787) 904-0135</p>
              <p className="font-weight-bold">Dirección</p>
              <p className="mb-1">10000 Av. 65 de Infantería</p>
              <p>Carolina, 00985, Puerto Rico</p>
              <p className="font-weight-bold">Correo Electrónico</p>
              <a href="mailto:ladybethgc@gmail.com">ladybethgc@gmail.com</a>
            </Col>
            <Col className="flex justify-center map-col">
              <StaticGoogleMap
                size="544x400"
                apiKey={process.env.GOOGLE_MAP_KEY}
              >
                <Marker.Group label="T" color="red">
                  <Marker location="18.382798875305642,-65.96291258465655" />
                </Marker.Group>
              </StaticGoogleMap>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  )
};

export default Services;