import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPost = (dataPath, slug) => {
  const fileContents = fs.readFileSync(path.join(`${dataPath}/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export const getPosts = (dataPath) => {
  const files = fs.readdirSync(path.join(dataPath));

  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(path.join(`${dataPath}/${slug}.mdx`), "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  return allPostsData;
};
