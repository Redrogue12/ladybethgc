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
        <h1 className="text-center primary-color">Services</h1>
        <section className="calendly-section">
          <div className="calendly-inline-widget" data-url="https://calendly.com/psicologalgc/"></div>
        </section>
      </main>
    </div>
  )
};

export default Services;