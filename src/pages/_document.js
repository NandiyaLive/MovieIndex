import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="description" name="description" content="Get endless entertainment, the shows and movies you love, for free!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://movieindex.tk/" />
        <meta property="og:title" content="Movie Index — Download all your favourites and more." />
        <meta property="og:description" content="Get endless entertainment, the shows and movies you love, for free!" />
        <meta property="og:image" content="https://movieindex.tk/netflix.webp" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://movieindex.tk/" />
        <meta property="twitter:title" content="Movie Index — Download all your favourites and more." />
        <meta property="twitter:description" content="Get endless entertainment, the shows and movies you love, for free!" />
        <meta property="twitter:image" content="https://movieindex.tk/netflix.webp" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@200;300;400;500;600&display=swap" rel="stylesheet" />

        <link rel="icon" href="/popcorn.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
