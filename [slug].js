import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Post({ slug, rawData, langData }) {
  const data = JSON.parse(rawData);
  const lang = JSON.parse(langData);
  const [movieData, setMovieData] = useState([]);
  const api_key = process.env.API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${data["movie_id"]}?api_key=${api_key}&language=en-US`
    )
      .then((response) => response.json())
      .then((tmdbData) => setMovieData(tmdbData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{data["title"]} | MovieIndex</title>
        <meta name="title" content={`${data["title"]} | MovieIndex`} />
        <meta
          name="description"
          content="With MovieIndex you can easily and directly download High Quality Movies for free without annoying ads!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content={`${data["title"]} | MovieIndex`} />
        <meta
          property="og:description"
          content="With MovieIndex you can easily and directly download High Quality Movies for free without annoying ads!"
        />
        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/original/${movieData["backdrop_path"]}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content={`${data["title"]} | MovieIndex`}
        />
        <meta
          property="twitter:description"
          content="With MovieIndex you can easily and directly download High Quality Movies for free without annoying ads!"
        />
        <meta
          property="twitter:image"
          content={`https://image.tmdb.org/t/p/original/${movieData["backdrop_path"]}`}
        />
      </Head>

      <main className="movie-page">
        <section className="movie-container">
          <div className="container">
            <div className="left">
              <div className="img-container">
                <Image
                  src={data["poster"]}
                  objectFit="cover"
                  layout="fill"
                  priority="true"
                />
              </div>
            </div>

            <div className="right">
              <h1>{data["title"]}</h1>
              <div className="movie-details">
                <p>
                  {movieData["release_date"]}
                  <span>•</span>
                </p>
                <p>
                  {lang[movieData["original_language"]]}
                  <span>•</span>
                </p>
                <p>{movieData["runtime"]}Min</p>
              </div>

              <div className="d-links">
                <p>Download</p>
                <ul>
                  {data["downloadLinks"].map((link, index) => (
                    <li key={index}>
                      &nbsp;
                      {link["index_link"] ? (
                        <p>
                          <a
                            href={link["index_link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link["title"]}
                          </a>
                          <span>
                            {" ["}
                            {link["file_size"]}
                            {"]"}
                          </span>
                        </p>
                      ) : (
                        <strike>{link["title"]}</strike>
                      )}
                    </li>
                  ))}
                  <li className="tg-link">
                    &nbsp;
                    {data["tgLink"] ? (
                      <a
                        href={data["tgLink"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Telegram
                      </a>
                    ) : (
                      <strike>Telegram</strike>
                    )}
                  </li>
                </ul>
              </div>

              {data["note"] ? (
                <div className="notes">
                  <p>Notes</p>
                  <ul>
                    <li>{data["note"]}</li>
                  </ul>
                </div>
              ) : null}

              <div className="details">
                <p>More Details</p>
                <a
                  href={`https://www.themoviedb.org/movie/${data["movie_id"]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 273.42 35.52"
                  >
                    <defs>
                      <linearGradient
                        id="x"
                        y1="17.76"
                        x2="273.42"
                        y2="17.76"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#90cea1" />
                        <stop offset=".56" stopColor="#3cbec9" />
                        <stop offset="1" stopColor="#00b3e5" />
                      </linearGradient>
                    </defs>
                    <g data-name="Layer 2">
                      <path
                        d="M191.85 35.37h63.9a17.67 17.67 0 0 0 17.67-17.67A17.67 17.67 0 0 0 255.75 0h-63.9a17.67 17.67 0 0 0-17.67 17.7 17.67 17.67 0 0 0 17.67 17.67Zm-181.75.05h7.8V6.92H28V0H0v6.9h10.1Zm28.1 0H46V8.25h.1l8.95 27.15h6L70.3 8.25h.1V35.4h7.8V0H66.45l-8.2 23.1h-.1L50 0H38.2ZM89.14.12h11.7a33.56 33.56 0 0 1 8.08 1 18.52 18.52 0 0 1 6.67 3.08 15.09 15.09 0 0 1 4.53 5.52 18.5 18.5 0 0 1 1.67 8.25 16.91 16.91 0 0 1-1.62 7.58 16.3 16.3 0 0 1-4.38 5.5 19.24 19.24 0 0 1-6.35 3.37 24.53 24.53 0 0 1-7.55 1.15H89.14Zm7.8 28.2h4a21.66 21.66 0 0 0 5-.55A10.58 10.58 0 0 0 110 26a8.73 8.73 0 0 0 2.68-3.35 11.9 11.9 0 0 0 1-5.08 9.87 9.87 0 0 0-1-4.52 9.17 9.17 0 0 0-2.63-3.18A11.61 11.61 0 0 0 106.22 8a17.06 17.06 0 0 0-4.68-.63h-4.6ZM133.09.12h13.2a32.87 32.87 0 0 1 4.63.33 12.66 12.66 0 0 1 4.17 1.3 7.94 7.94 0 0 1 3 2.72 8.34 8.34 0 0 1 1.15 4.65 7.48 7.48 0 0 1-1.67 5 9.13 9.13 0 0 1-4.43 2.82V17a10.28 10.28 0 0 1 3.18 1 8.51 8.51 0 0 1 2.45 1.85 7.79 7.79 0 0 1 1.57 2.62 9.16 9.16 0 0 1 .55 3.2 8.52 8.52 0 0 1-1.2 4.68 9.32 9.32 0 0 1-3.1 3 13.38 13.38 0 0 1-4.27 1.65 22.5 22.5 0 0 1-4.73.5h-14.5Zm7.8 14.15h5.65a7.65 7.65 0 0 0 1.78-.2 4.78 4.78 0 0 0 1.57-.65 3.43 3.43 0 0 0 1.13-1.2 3.63 3.63 0 0 0 .42-1.8A3.3 3.3 0 0 0 151 8.6a3.42 3.42 0 0 0-1.23-1.13A6.07 6.07 0 0 0 148 6.9a9.9 9.9 0 0 0-1.85-.18h-5.3Zm0 14.65h7a8.27 8.27 0 0 0 1.83-.2 4.67 4.67 0 0 0 1.67-.7 3.93 3.93 0 0 0 1.23-1.3 3.8 3.8 0 0 0 .47-1.95 3.16 3.16 0 0 0-.62-2 4 4 0 0 0-1.58-1.18 8.23 8.23 0 0 0-2-.55 15.12 15.12 0 0 0-2.05-.15h-5.9Z"
                        fill="url(#x)"
                        data-name="Layer 1"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/data"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".json", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const rawData = fs.readFileSync(
    path.join("src/data", slug + ".json"),
    "utf-8"
  );

  const langData = fs.readFileSync(path.join("src/lib", "lang.json"), "utf-8");

  return {
    props: {
      slug,
      rawData,
      langData,
    },
  };
}
