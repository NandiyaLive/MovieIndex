import Head from "next/head";

const Disclaimer = () => {
  return (
    <>
      <Head>
        <title>Disclaimer | MovieIndex</title>
      </Head>

      <div className="reset-css extra-lh">
        <h2>Disclaimer</h2>
        <p>All images and titles, are copyright their respective studios and/or production companies. "MovieIndex" claims no ownership or connection to them.</p>
        <p>
          "MovieIndex" <strong>DOESN'T</strong> spread piracy and <strong>DOESN'T</strong> claim full ownership of any content on this website, we just index and share the files already available on
          the internet.
        </p>
        <p>If you see any copyrights infringed content here kindly contact us and it will be removed upon request.</p>

        <p>* Movies listed on the Featured page are only based on my personal preferences. So don't get triggerd. It's okay if you don't like them.</p>
      </div>
    </>
  );
};

export default Disclaimer;
