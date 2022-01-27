import { StoreProvider } from 'easy-peasy'
import Head from 'next/head'

import store from '../store/index'

import '@navikt/ds-css'
import '@navikt/ds-css-internal'

import '../assets/scss/App.scss'
import '../assets/css/animate.min.css'

import { AppProps, NextPage } from 'next'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  )
}

export default MyApp
