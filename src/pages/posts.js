import Link from "next/link";
import { getPosts } from "../components/getData";

const Posts = ({ posts }) => {
  return (
    <>
      <section className="home-page">
        <h1>All Posts</h1>
        <ul className="posts-list">
          {posts.map((post, index) => (
            <Link href={`post/${post.slug}`} key={index}>
              <li>{post.data.title}</li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Posts;

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
