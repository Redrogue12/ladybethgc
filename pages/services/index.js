import Head from 'next/head';

import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Services</title>
        <link rel='icon' href='/favicon.ico' />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>

      <Header />

      <main className="h-100">
        <h1 className={styles.title}>Services</h1>
        <section className="calendly-section">
          <div className="calendly-inline-widget" data-url="https://calendly.com/ladybethgc"></div>
        </section>
      </main>
    </div>
  )
};

export default Blog