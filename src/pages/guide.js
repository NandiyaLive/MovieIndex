import Head from "next/head";
import Link from "next/link";

const Guide = () => {
  return (
    <>
      <Head>
        <title>Guide | MovieIndex</title>
      </Head>
      <main className="guide-page">
        <div className="reset-css extra-lh">
          <h2>What is the difference between HEVC & AVC?</h2>
          <p>
            HEVC (H265) and AVC (H264) are two different video compression standards that are used to compress video in size but still maintain the quality of the video and x264 and x265 are the respective
            encoding libraries or codecs that use to encode videos. x264 is an earlier codec and is used in a lot of videos nowdays and x265 is a newer standard.
          </p>
          <p>Now if you want a technical description then according to Wikipedia:</p>
          <ul>
            <li>
              H.264 or MPEG-4 Part 10, Advanced Video Coding (MPEG-4 AVC) is a block-oriented motion-compensation-based video compression standard that is currently one of the most commonly used
              formats
            </li>
            <li>High Efficiency Video Coding (HEVC), also known as H.265, is a video compression standard, one of several potential successors to the widely used AVC (H.264 or MPEG-4 Part 10)</li>
          </ul>
          <p>A video compressed using the H265 standard would be smaller in size and would be better in quality for a similar video compressed in H264</p>
          <p>I prefer x265 because you get a major file size difference at a very low-quality drop. I’d rather save my space and compromise a tad bit on the quality.</p>
        </div>
      </main>
    </>
  );
};

export default Guide;
