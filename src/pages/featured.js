import Link from "next/link";
import { getPosts } from "../components/getData";

const Featured = ({ posts }) => {
  return (
    <>
      <section className="featured-page home-page">
        <h1>Featured Movies</h1>
        
        <ul className="posts-list">
          {posts.map((post, index) => (
            <Link href={`featured/${post.slug}`} key={index}>
              <li>{post.data.title}</li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Featured;

export const sortByDate = (a, b) => {
  return new Date(b.data.date) - new Date(a.data.date);
};

export const getStaticProps = () => {
  const posts = getPosts("src/data/featured");

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};
