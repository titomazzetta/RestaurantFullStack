// pages/_app.js
import React from 'react';
import Head from "next/head";
import { AppProvider } from '../components/context'; // Import AppProvider from where you've defined it
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
