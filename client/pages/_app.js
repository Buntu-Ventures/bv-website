import React from 'react'
import Head from 'next/head'
import '../public/css/reboot.css'
import '../public/css/global.css'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
        <Component {...pageProps} />
    </>
  )
}
