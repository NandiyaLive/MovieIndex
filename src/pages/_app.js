import Head from "next/head";
import Link from "next/link";
import "../styles/styles.scss";
import "../styles/reset.scss";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>MovieIndex — Download all your favourites and more.</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
