import { MDXRemote } from "next-mdx-remote";
import { getPosts, getPost } from "../../components/getData";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer";

function Post({ data, content }) {
  return (
    <>
      <Head>
        <title>{`${data.title} | MovieIndex`}</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.title} | MovieIndex`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${data.title} | MovieIndex`} />
      </Head>
      <section className="post-page">
        <h1>{data.title}</h1>

        <div className="reset-css post-content">
          <MDXRemote {...content} components={{ Link: Link }} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts("src/data/posts");
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const post = await getPost("src/data/posts", slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
