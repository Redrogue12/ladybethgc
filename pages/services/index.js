import Head from 'next/head';
// https://www.npmjs.com/package/react-calendly
import { InlineWidget } from "react-calendly";

const Services = () => {
  return (
    <div className="p-40 primary-bg vh-100">
      <Head>
        <title>Servicios - Ladybeth González-Cortés, LCC</title>
        <link rel='icon' href='/favicon.ico' />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <main>
        <div className="main-container">
          <h1 className="text-center primary-color">Servicios</h1>
          <section className="calendly-section">
            <InlineWidget url="https://calendly.com/psychologistlgc" />
          </section>
        </div>
      </main>
    </div>
  )
};

export default Services;