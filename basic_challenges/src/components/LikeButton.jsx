import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  return (
    <div>
      <h1>{like ? "❤️" : "🤍"}</h1>
      <button onClick={() => setLike(!like)}>{like ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default LikeButton;
