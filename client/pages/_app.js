import React from 'react'
import Head from 'next/head'
// import '../public/css/reboot.css'
// import '../public/css/global.css'
import CssBaseline from '@mui/material/CssBaseline'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
    </>
  )
}
