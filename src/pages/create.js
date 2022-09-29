import Head from "next/head";
import { useState, useRef } from "react";
import { encode } from "url-safe-base64";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Dashboard = () => {
  const avc1080Ref = useRef(null);
  const avc720Ref = useRef(null);
  const hevc1080Ref = useRef(null);
  const hevc720Ref = useRef(null);
  const mvNameRef = useRef(null);
  const movieLinkRef = useRef(null);
  const [postData, setPostData] = useState(null);
  const [frontmatter, setFrontmatter] = useState(null);
  const [encodedText, setEncodedText] = useState(null);
  const [resolution, setResolution] = useState(null);
  const [codec, setCodec] = useState(null);
  const [bitdepth, setBitdepth] = useState(null);

  var today = new Date();
  const monday = (() => {
    var day = today.getDay(),
      diff = today.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(today.setDate(diff));
  })();

  const sunday = (() => {
    const first = today.getDate() - today.getDay() + 1;
    const last = first + 6;

    return new Date(today.setDate(last));
  })();

  const title = `${monday.toLocaleString("default", { month: "long" })} ${monday.getDate()} - ${sunday.toLocaleString("default", { month: "long" })} ${sunday.getDate()}`;
  var date = `${sunday.toLocaleString("default", { month: "long" })} ${sunday.getDate()}, ${sunday.getFullYear()}`;

  function createPost(e) {
    e.preventDefault();

    setPostData(null);

    const movieName = mvNameRef.current.value;
    const avc1080Link = encode(btoa(avc1080Ref.current.value));
    const avc720Link = encode(btoa(avc720Ref.current.value));
    const hevc1080Link = encode(btoa(hevc1080Ref.current.value));
    const hevc720Link = encode(btoa(hevc720Ref.current.value));

    setFrontmatter(`---
title: "${title}"
date: "${date}"
---`);

    setPostData(`${movieName ? "## " + movieName : ""}

- ${avc1080Link ? "<Link href='/go?url=" + avc1080Link + "'>1080p AVC</Link>" : "<s>1080p AVC</s>"}
- ${avc720Link ? "<Link href='/go?url=" + avc720Link + "'>720p AVC</Link>" : "<s>720p AVC</s>"}
- ${hevc1080Link ? "<Link href='/go?url=" + hevc1080Link + "'>1080p HEVC 10bit</Link>" : "<s>1080p HEVC 10bit</s>"}
- ${hevc720Link ? "<Link href='/go?url=" + hevc720Link + "'>720p HEVC 10bit</Link>" : "<s>720p HEVC 10bit</s>"}
`);
  }

  const encodeText = () => {
    const movieLink = encode(btoa(movieLinkRef.current.value));
    setEncodedText(`- <Link href='/go?url=${movieLink}'>${resolution} ${codec} ${bitdepth}</Link>`);
  };

  const copyToClipboard = async (prams) => {
    try {
      await navigator.clipboard.writeText(prams);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const resetData = (props) => {
    if (props === "post") {
      mvNameRef.current.value ? (mvNameRef.current.value = "") : null;
      avc1080Ref.current.value ? (avc1080Ref.current.value = "") : null;
      avc720Ref.current.value ? (avc720Ref.current.value = "") : null;
      hevc1080Ref.current.value ? (hevc1080Ref.current.value = "") : null;
      hevc720Ref.current.value ? (hevc720Ref.current.value = "") : null;
      setPostData(null);
      setFrontmatter(null);
    } else {
      movieLinkRef.current.value ? (movieLinkRef.current.value = "") : null;
      setResolution(null);
      setCodec(null);
      setBitdepth(null);
      setEncodedText(null);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard | MovieIndex</title>
      </Head>
      <Tabs>
        <TabList>
          <Tab>Create Post</Tab>
          <Tab>Create Link</Tab>
        </TabList>

        <TabPanel>
          <section className="create-page">
            <label htmlFor="movie-name">Movie Name</label>
            <input type="text" id="movie-name" name="movie-name" ref={mvNameRef} />

            <label htmlFor="avc1080">1080p AVC Link</label>
            <input type="avc1080" id="avc1080" name="avc1080" ref={avc1080Ref} />
            <label htmlFor="avc720">720p AVC Link</label>
            <input type="avc720" id="avc720" name="avc720" ref={avc720Ref} />

            <label htmlFor="hevc1080">1080p HEVC Link</label>
            <input type="hevc1080" id="hevc1080" name="hevc1080" ref={hevc1080Ref} />
            <label htmlFor="hevc720">720p HEVC Link</label>
            <input type="hevc720" id="hevc720" name="hevc720" ref={hevc720Ref} />

            <div className="buttons">
              <button className="btn" onClick={createPost}>
                Create
              </button>
              <button className="btn" onClick={() => resetData("post")}>
                Refresh
              </button>
            </div>
            {frontmatter ? (
              <div className="output-area">
                <button onClick={() => copyToClipboard(frontmatter)}>Copy</button>
                <textarea name="frontmatter" id="frontmatter" rows={4} disabled>
                  {frontmatter}
                </textarea>
              </div>
            ) : (
              ""
            )}

            {postData ? (
              <div className="output-area">
                <button onClick={() => copyToClipboard(postData)}>Copy</button>
                <textarea name="postData" id="postData" rows={15} disabled>
                  {postData}
                </textarea>
              </div>
            ) : (
              ""
            )}
          </section>
        </TabPanel>
        <TabPanel>
          <section className="create-page">
            <label htmlFor="movieLink">Movie Link</label>
            <input type="movieLink" id="movieLink" name="movieLink" ref={movieLinkRef} />
            <label htmlFor="quality">Quality</label>
            <div className="radio-btns">
              <input type="radio" value="2160p" name="reso" onChange={() => setResolution("2160p")} /> 2160p
              <input type="radio" value="1440p" name="reso" onChange={() => setResolution("1440p")} /> 1440p
              <input type="radio" value="1080p" name="reso" onChange={() => setResolution("1080p")} /> 1080p
              <input type="radio" value="720p" name="reso" onChange={() => setResolution("720p")} /> 720p
            </div>
            <div className="radio-btns">
              <input type="radio" value="HEVC" name="codec" onChange={() => setCodec("HEVC")} /> HEVC
              <input type="radio" value="AVC" name="codec" onChange={() => setCodec("AVC")} /> AVC
              <input type="radio" value="AV1" name="codec" onChange={() => setCodec("AV1")} /> AV1
              <input type="radio" value="VP9" name="codec" onChange={() => setCodec("VP9")} /> VP9
            </div>
            <div className="radio-btns">
              <input type="radio" value="10bit" name="bitdepth" onChange={() => setBitdepth("10bit")} checked /> 10bit
              <input type="radio" value="" name="bitdepth" onChange={() => setBitdepth("")} /> 8bit
            </div>

            <div className="buttons">
              <button className="btn" onClick={encodeText}>
                Create
              </button>
              <button className="btn" onClick={() => resetData("link")}>
                Refresh
              </button>
            </div>

            {encodedText ? (
              <div className="output-area">
                <button onClick={() => copyToClipboard(encodedText)}>Copy</button>
                <textarea name="encodedText" id="encodedText" rows={8} disabled>
                  {encodedText}
                </textarea>
              </div>
            ) : (
              ""
            )}
          </section>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Dashboard;
