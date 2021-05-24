import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import '../styles/hero-area.css'
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
