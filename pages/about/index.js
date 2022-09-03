import Head from 'next/head';
import aboutImg from '../../public/images/about-img.jpg'

const Blog = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />

        <meta name="description" content="Ladybeth Gonzalez Cortes: Psicóloga consejera, instructora de yoga y meditación, conferenciante y educadora" />
        <meta name="keywords" content="Psicóloga consejera, instructora de yoga y meditación, conferenciante y educadora" />
        <meta name="author" content="Ladybeth González Cortés" />
      </Head>

      <main className="page-main">
        <div className="main-container">
          <h1 className="about-header text-center">Sobre mí</h1>
          <section className="flex justify-center flex-column align-center p-20">

            <div className="about-quote">
              <img
                className="about-image"
                src={aboutImg}
                alt="Ladybeth"
              />
              <blockquote className="blockquote">
                <p>
                  Creo que necesitamos menos corrección y más aceptación;
                </p>

                <p>
                  Menos perfeccionismo y más lo suficiente bueno/a;
                </p>

                <p>
                  Menos críticas y más autocompasión.
                </p>
              </blockquote>
            </div>

            <h2>Ladybeth González Cortés</h2>
            <h3 className="pb-3">Psicóloga consejera, instructora de yoga y meditación, conferenciante y educadora</h3>

            <p>
              Me siento honrada por poder apoyar a mis clientes en su proceso de sanación, crecimiento y desarrollo humano. Esta práctica se enfoca en ofrecer un espacio seguro para que las personas puedan expresar su vulnerabilidad. Un espacio donde puedan sentirse escuchados/as con compasión, amabilidad y sin juzgar sus procesos. 
            </p>

            <p>
              Trabajo con personas que tienen baja autoestima, que se sienten asfixiadas por la duda, la tristeza, el estrés, la ansiedad, personas que quieren encontrar un propósito o sentido en la vida, conocerse a sí mismos y aprender a vivir a plenitud, en el momento presente y más. En mi práctica, apoyo a las personas que desean encontrar más aceptación, plenitud y vitalidad en todo lo que son.
            </p>

            <p>
              A través de prácticas holísticas e integradoras, se impulsa a las personas a crear más capacidad para sentir las cosas difíciles y a desarrollar una mayor comprensión de cómo manejar factores estresantes y los desafíos de la vida, al mismo tiempo que se crea un espacio para la presencia y conexión.
            </p>

            <p>
              Busco colaborar y apoyar a mis clientes en su proceso de crecimiento hacia una vida de calidad, plena y con propósito. El principal objetivo es que cada vez que termines una sesión puedas sentirte escuchado/a, comprendido/a, pero sobre todo relajado/a y en armonía contigo mismo/a.
            </p>

          </section>

          <section className="education-section">
            <h2 className="text-center">Educación</h2>
            <ul>
              <li><strong>M.A. Consejería Psicológica</strong> de la Universidad Interamericana de Puerto Rico, Recinto Metropolitano</li>
              <li><strong>B.A. Psicológica</strong> de la Universidad Interamericana de Puerto Rico, Recinto Metropolitano</li>
            </ul>
          </section>

          <section className="training-section">
            <h2 className="text-center">Entrenamientos</h2>
            <ul>
              <li>Facilitadora de Dancing Mindfulness</li>
              <li>Instructora de Hatha Raja Yoga y Meditación RYT 200</li>
              <li>Mindfulness</li>
              <li>Reducción de Trauma Incidente</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
};

export default Blog