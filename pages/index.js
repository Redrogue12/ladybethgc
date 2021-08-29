import Head from 'next/head'
// import Link from 'next/link'
import HeroArea from '../components/HeroArea'
import About from '../components/About'
import IgFeed from '../components/IgFeed'
import GridArea from '../components/GridArea'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ladybeth González-Cortés, LCC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <main>
        <HeroArea />
        <About />
        <GridArea />
        <IgFeed />
      </main>
    </div>
  )
}
