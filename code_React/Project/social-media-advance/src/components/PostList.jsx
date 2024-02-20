import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  }, []);

  // const handleGetPostsClick = () => {
  //   // console.log("get posts clicked");
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //     });
  // };

  return (
    <>
      {postList.length === 0 && (
        // <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
        <WelcomeMessage />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
