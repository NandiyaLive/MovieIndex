import Image from "next/image";
import React from "react";

const Test = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      <Image alt="Poster" src="https://www.themoviedb.org/t/p/original/k38sLjhQsdLRJZCu3hIL7RcGo3A.jpg" layout="fill" objectFit="contain" />
    </div>
  );
};

export default Test;
