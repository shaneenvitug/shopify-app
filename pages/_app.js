import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Formula Fashion Clothing</title>
          <meta charSet='utf-8' />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </>
    );
  }
}

export default MyApp;