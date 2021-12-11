import "../styles/globals.css";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import colors from "../config/colors";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user && router.pathname === "/login") {
      router.replace("/home");
    }
  }, [user, router.pathname]);

  return (
    <RecoilRoot>
      <Head>
        <title>YT Vids</title>
        <link rel="icon" href="/logo-transparent.png" />
      </Head>
      <NextNProgress color={colors.primary} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
