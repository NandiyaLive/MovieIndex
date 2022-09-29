import { MDXRemote } from "next-mdx-remote";
import { getPosts, getPost } from "../../components/getData";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";

function Post({ data, content }) {
  return (
    <>
      <Head>
        <title>{`${data.title} | MovieIndex`}</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.title} | MovieIndex`} />
        <meta property="og:image" content={data.poster} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${data.title} | MovieIndex`} />
        <meta property="twitter:image" content={data.poster} />
      </Head>

      <section className="featured-movie-page">
        <div className="post-content">
          <div className="poster">
            {/* <Image src={data.poster} objectFit="cover" layout="fill" style={{ width: "300px", height: "auto" }} alt="Poster" priority/> */}
            <img src={data.poster} alt="Poster" />
            <div className="overlay"></div>
            <h1 className="title">{data.title}</h1>
          </div>

          <div className="reset-css">
            <MDXRemote {...content} components={{ Link: Link }} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts("src/data/featured");
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const post = await getPost("src/data/featured", slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
