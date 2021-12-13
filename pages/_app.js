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
        <meta
          name="description"
          content="Save your favorite YT Videos!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prashoonb" />
        <meta name="twitter:creator" content="@prashoonb" />
        <meta property="og:title" content="YT Vids" />
        <meta
          property="og:description"
          content="Save your favorite YT Videos!"
        />
        <meta property="og:url" content="https://yt-vids.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:alt" content="YT Vids" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:site_name" content="YT Vids" />
        <link rel="canonical" href="https://yt-vids.vercel.app/" />
      </Head>
      <NextNProgress color={colors.primary} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
