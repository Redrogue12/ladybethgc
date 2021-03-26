import Head from 'next/head';

import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <section>
          <p>
            Ladybeth Gonzalez-Cortes is a Psychologist and Hatha Raja Yoga certified teacher RYT200 with 7 years of practice and 4 years of teaching experience. She earned her Master’s degree in Counseling Psychology from the Interamerican University of Puerto Rico. Over the years she has specialized in the development of healthy self-esteem, healthy interpersonal relationships, anxiety and depression management.
          </p>
          <p>
            Since 2017, Ladybeth has integrated holistic alternatives to the mental health field by teaching Restorative Yoga, Healing Meditation and Healthy Living lectures at the True North Health Center in Santa Rosa, California. She is also a certified Dancing Mindfulness teacher and she is very passionate about meditation and spirituality. Currently she is dedicated to leading retreats and offering yoga classes and educational talks on healthy lifestyle. It also offers consultations services on Plant Based Lifestyle, Wellness Living and Therapy for residents of Puerto Rico.
          </p>
          <p>
            Ladybeth is known for her calm voice and her dedication to each of her clients. She hopes her clients’ leaves her classes and sessions feeling relaxed, healed and loved. On her free time, she enjoys spending time with her loved ones, exploring nature, listening podcast and playing with her lovely dog Maily. She loves to keep learning about personal development, Buddhist psychology, alternative therapies, meditation, yoga and everything related to living a life full of joy.
          </p>
        </section>
      </main>
    </div>
  )
};

export default Blog