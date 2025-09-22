import { useState } from "react";

export default function Bai4() {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];

  return (
    <div>
      <h2><b>Bài 4: Like/Dislike Post</b></h2>
      <div>
        {posts.map((text) => <Post text={text} />)}
      </div>
    </div>
  )
}

function Post({ text }) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  return (
    <div style={{ border: "1px solid", padding: "10px" }}>
      <p>{text}</p>
      <button onClick={() => setLikeCount((prev) => prev + 1)}>
        {`👍${likeCount}`}
      </button>
      <button onClick={() => setDislikeCount((prev) => prev + 1)}>
        {`👎${dislikeCount}`}
      </button>
    </div>
  );
}