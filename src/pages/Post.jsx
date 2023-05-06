import { useLocation } from "react-router";
import { posts } from "../data.js";

const Post = () => {
  const location = useLocation();
  console.log(location);
  const postId = location.pathname.split("/")[2];
  console.log(posts);
  const post = posts.filter((p) => p.id.toString() === postId)[0];
  console.log(post);
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
