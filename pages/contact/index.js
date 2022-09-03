import Head from 'next/head';

const Services = () => {
  return (
    <div className="p-40 primary-bg vh-100">
      <Head>
        <title>Contacto</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className="main-container">
          <h1 className="text-center primary-color">Contacto</h1>
          <section className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.242722527761!2d-65.96295549999999!3d18.3818011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036728820a46b7%3A0x2aaa6b554e396c7a!2sCarolina%20Shopping%20Court!5e0!3m2!1sen!2sus!4v1662160998205!5m2!1sen!2sus"
              width="600"
              height="450"
              className="map-element"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </main>
    </div>
  )
};

export default Services;