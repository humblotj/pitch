import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/eina-bold.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/eina-regular.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/markpro-heavy-1.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
