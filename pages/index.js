import Head from 'next/head'
// import Link from 'next/link'
import HeroArea from '../components/HeroArea'
import About from '../components/About'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ladybeth González-Cortés, LCC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <main className="">
        <HeroArea />
        <About />
      </main>
    </div>
  )
}
