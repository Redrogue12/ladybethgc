import Head from 'next/head';
import { Row, Col } from "reactstrap";
// https://react-google-maps-api-docs.netlify.app/
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
  width: '400px',
  height: '400px',
  borderRadius: 20,
};

const center = {
  lat: 18.382798875305642,
  lng: -65.96291258465655
};

const Services = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY,
  })
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

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
              {
                isLoaded ? 
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  { /* Child components, such as markers, info windows, etc. */ }
                  <></>
                </GoogleMap>
                : <></>
              }
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.242722527761!2d-65.96295549999999!3d18.3818011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036728820a46b7%3A0x2aaa6b554e396c7a!2sCarolina%20Shopping%20Court!5e0!3m2!1sen!2sus!4v1662160998205!5m2!1sen!2sus"
                width="600"
                height="450"
                className="map-element"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </Col>
          </Row>
        </div>
      </main>
    </div>
  )
};

export default Services;