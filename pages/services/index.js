import Head from 'next/head';

const Blog = () => {
  return (
    <div className="">
      <Head>
        <title>Services</title>
        <link rel='icon' href='/favicon.ico' />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <main className="h-100">
        <h1 className="">Services</h1>
        <section className="calendly-section">
          <div className="calendly-inline-widget" data-url="https://calendly.com/egonzalezcortes"></div>
        </section>
      </main>
    </div>
  )
};

export default Blog