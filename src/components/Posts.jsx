import PostData from "../data/PostData";
import { useState } from "react";

function Posts() {
  const [postList, setPostList] = useState([...PostData]);

  const likeStatArray = postList.map((item) => item.likes);
  const [likes, setlikes] = useState([...likeStatArray]);

  const handleLike = (like, i) => {
    const newLikes = [...likes];
    if (like === 1) {
      newLikes[i] += 1;
    } else if (like === -1 && newLikes[i] > 0) {
      newLikes[i] -= 1;
    }
    setlikes(newLikes);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postList.map((item, index) => {
          return (
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>Post Title #{item.id}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes"> {likes[index]} </span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => handleLike(1, index)}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => handleLike(-1, index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
