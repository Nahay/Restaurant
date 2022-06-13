import Head from 'next/head'

import Logo from '../components/logo/Logo'
import Slider from '../components/slider/Slider'
import SocialMedia from '../components/socialMedia/SocialMedia'


export default function Home() {

  return (
    <div>

      <Head>
        <title>The Scarlet</title>
      </Head>

      <header>
        <Logo/>
        <SocialMedia/>
      </header>
      <Slider/>
    </div>
  )
}