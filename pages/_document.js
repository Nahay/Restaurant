import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Scarlet Restaurant" />
        <link rel="icon" href="/logo192.ico" />

        <meta name="theme-color" content="#F1BE71"/>

        <meta name="keywords" content="restaurant, scarlet, showcase site" />
        <meta name= "author" content= "Lily B" />

        <meta property="og:title" content="Scarlet Restaurant"/>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Scarlet is a modern restaurant located in Manhattan."/>
        <meta property="og:site_name" content="Scarlet Restaurant"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/Nahay/Assets/master/Scarlet/banner.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="590" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://thescarlet.vercel.app/"/>
        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="https://raw.githubusercontent.com/Nahay/Assets/master/Scarlet/banner.png"/>


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}