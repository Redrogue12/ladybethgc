import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import '../styles/hero-area.css';
import '../styles/about-area.css';
import '../styles/grid-area.css';
import '../styles/blog.css';
import '../styles/services.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
