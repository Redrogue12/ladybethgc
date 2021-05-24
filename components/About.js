import aboutImg from '../public/images/about-img.jpg'

const About = () => {
  return (
    <div className="about-area p-40 flex justify-center align-center">
      <img
        className="about-image"
        src={aboutImg}
        alt="Ladybeth"
      />
      <p>
        !Hola! Mi nombre es Ladybeth. Soy psicóloga licenciada, pero también podrías llamarme motivadora del amor propio y autocuidado, defensora de la vulnerabilidad y proveedora de un espacio de esperanza y sanación. Creo en que necesitamos menos juicio y más autocompasión; Menos perfeccionismo y más estoy haciendo mi mejor esfuerzo; Menos críticas y más aceptación. Mi deseo es que mis clientes se sientan escuchados y comprendidos.
      </p>
      
    </div>
  );
}

export default About;