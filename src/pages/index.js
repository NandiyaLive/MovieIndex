import Image from "next/future/image";
import Link from "next/link";
import { getPosts } from "../components/getData";

export default function Home({ posts }) {
  return (
    <>
      <section className="home-page">
        <h1>Latest Posts</h1>
        <ul className="posts-list">
          {posts.slice(0, 5).map((post, index) => (
            <Link href={`posts/${post.slug}`} key={index}>
              <li>{post.data.title}</li>
            </Link>
          ))}
          <Link href="/posts">
            <li>All Posts</li>
          </Link>
        </ul>
      </section>
    </>
  );
}

export const sortByDate = (a, b) => {
  return new Date(b.data.date) - new Date(a.data.date);
};

export const getStaticProps = () => {
  const posts = getPosts("src/data/posts");

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};
