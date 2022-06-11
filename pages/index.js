import Head from 'next/head'

import Logo from '../components/Logo/Logo'
import Slider from '../components/slider/Slider'
import SocialMedia from '../components/socialMedia/SocialMedia'


export default function Home() {

  return (
    <div>

      <Head>
        <title>The Scarlet</title>
        <meta name="description" content="Scarlet Restaurant" />
        <link rel="icon" href="/logo192.ico" />

        <meta name="theme-color" content="#4f46e5"/>

        <meta name="keywords" content="restaurant, scarlet, showcase site" />
        <meta name= "author" content= "Lily B" />

        <meta property="og:title" content="Scarlet Restaurant"/>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Scarlet is a modern restaurant located in Manhattan."/>
        <meta property="og:site_name" content="Scarlet Restaurant"/>
        <meta property="og:image" content=""/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="590" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content=""/>
        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content=""/>
      </Head>

      <header>
        <Logo/>
        <SocialMedia/>
      </header>
      <Slider/>
    </div>
  )
}