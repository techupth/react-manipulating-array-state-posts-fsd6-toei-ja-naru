import PostsData from "./PostsData";
import { useState } from "react";
function Posts() {
  const InsertPost = (post, index) => {
    const [like, setLike] = useState(post.likes);
    const handleLike = (e, i) => {
      e.preventDefault();
      post.likes++;
      setLike(post.likes);
      // console.log(post.likes);
    };
    const handleDislike = (e, i) => {
      e.preventDefault();
      if (post.likes <= 0) {
        alert("It cann't to decreasing likes,Like is zero!!!");
      } else {
        post.likes--;
        setLike(post.likes);
      }
    };
    return (
      <div class="post-item" key={post.id}>
        <div class="post-header">
          <h2>{post.title}</h2>
          <div class="post-social-media-stats">
            <span class="stats-topic">Likes: </span>
            <span class="post-likes">{like}</span>
          </div>
        </div>
        <p class="post-content">{post.content}</p>
        <div class="post-actions">
          <button
            class="like-button"
            onClick={(e, index) => {
              handleLike(e, index);
            }}
          >
            Like
          </button>
          <button class="dislike-button" onClick={handleDislike}>
            Dislike
          </button>
        </div>
      </div>
    );
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list"></div>
      {PostsData.map(InsertPost)}
    </div>
  );
}

export default Posts;
