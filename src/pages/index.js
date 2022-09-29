import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";
import React, { useState } from "react";

export default function Home({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(JSON.parse(b.data)["date"])) -
        Number(new Date(JSON.parse(a.data)["date"]))
    )
    .filter((post) =>
      JSON.parse(post.data)
        ["title"].toLowerCase()
        .includes(searchValue.toLowerCase())
    );

  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>MovieIndex — High Quality Movies</title>
        <meta name="title" content="MovieIndex — High Quality Movies"/>
        <meta name="description" content="With MovieIndex you can easily and directly download High Quality Movies for free without annoying ads!"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="MovieIndex — High Quality Movies"/>
        <meta property="og:description" content="With MovieIndex you can easily and directly download High Quality Movies for free without annoying ads!"/>
        <meta property="og:image" content="https://www.themoviedb.org/t/p/original/1QeoztfG9anCFflp29pbj9lejfz.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="MovieIndex — High Quality Movies"/>
        <meta property="twitter:description" content="With MovieIndex you can easily and directly download High Quality Movies for free without annoying ads!"/>
        <meta property="twitter:image" content="https://www.themoviedb.org/t/p/original/1QeoztfG9anCFflp29pbj9lejfz.jpg"/>
      </Head>

      <main className="home-page">
        <section className="list-container">
          <div className="container">
            <form>
              <input
                className="search-bar"
                type="text"
                aria-label="Search by title"
                placeholder="Search by Title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            {!filteredBlogPosts.length && (
              <p className="no-posts">No movies found :(</p>
            )}

            <ul>
              {filteredBlogPosts.map((post, index) => (
                <li key={index}>
                  <p className="movie-title">
                    <Link href={post.slug}>
                      {JSON.parse(post.data)["title"]}
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export const sortByDate = (a, b) => {
  return new Date(b.data["date"]) - new Date(a.data["date"]);
};

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("src/data"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".json", "");

    // Get frontmatter
    const data = fs.readFileSync(path.join("src/data", filename), "utf-8");

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
