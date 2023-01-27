import aboutImg from '../public/images/about-img.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-area p-40">
      <Image
        className="about-image"
        src={aboutImg}
        alt="Ladybeth"
      />
      <div className="about-text-area">
        <h1>
          ¡Hola!
        </h1>
        <p>
          Mi nombre es Ladybeth. Soy psicóloga licenciada, pero también podrías llamarme motivadora del amor propio y autocuidado, defensora de la vulnerabilidad y proveedora de un espacio de esperanza y sanación. Creo en que necesitamos menos juicio y más autocompasión; Menos perfeccionismo y más estoy haciendo mi mejor esfuerzo; Menos críticas y más aceptación. Mi deseo es que mis clientes se sientan escuchados y comprendidos.
        </p>
      </div>      
    </div>
  );
}

export default About;