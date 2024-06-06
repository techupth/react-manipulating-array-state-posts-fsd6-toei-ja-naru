import posts from "./data";
import { useState } from "react";

function Posts() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>

      {posts.map((post) => {
        const [likeCount, setLikeCount] = useState(post.likes);

        const handleLikeClick = () => {
          setLikeCount(likeCount + 1);
        };
        const handleDislikeClick = () => {
          if (likeCount > 0) {
            setLikeCount(likeCount - 1);
          }
        };

        return (
          <div className="post-list" key={post.id}>
            <div className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{likeCount}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button className="like-button" onClick={handleLikeClick}>
                  Like
                </button>
                <button className="dislike-button" onClick={handleDislikeClick}>
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
