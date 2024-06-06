import posts from "./data";
import { useState } from "react";

function Posts() {
  const [postsState, setPostsState] = useState(posts);

  const handleClick = (button, index) => {
    const newPosts = [...postsState];
    if (button === "like") {
      newPosts[index].likes++;
    } else if (button === "dislike" && newPosts[index].likes > 0) {
      newPosts[index].likes--;
    }
    setPostsState(newPosts);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>

      {postsState.map((post, index) => {
        return (
          <div className="post-list" key={post.id}>
            <div className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    handleClick("like", index);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    handleClick("dislike", index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
