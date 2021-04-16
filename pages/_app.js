import MainMenu from "../components/navbar";
import "../styles/globals.scss";

import { useRouter } from "next/router";
import ar from '../locales/ar';
import en  from '../locales/en';
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return (
    <div className={locale === "ar" ? "text-right" : ""} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Head>
        <title>{`${t.spark}`} </title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <MainMenu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
