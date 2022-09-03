import Head from 'next/head';

const Services = () => {
  return (
    <div className="p-40 primary-bg vh-100">
      <Head>
        <title>Services</title>
        <link rel='icon' href='/favicon.ico' />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <main>
        <div className="main-container">
          <h1 className="text-center primary-color">Servicios</h1>
          <section className="calendly-section">
            <div className="calendly-inline-widget" data-url="https://calendly.com/psychologistlgc"></div>
          </section>
        </div>
      </main>
    </div>
  )
};

export default Services;