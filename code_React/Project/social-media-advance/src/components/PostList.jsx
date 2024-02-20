import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fethcing, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    // console.log("fetchig started");

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setfetching(false);
        // console.log("fetched returned");
      });

    return () => {
      console.log("Cleaning up UseEffect");
      controller.abort();
    };

    // console.log("fetched ended");
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
      {fethcing && <LoadingSpinner />}
      {!fethcing && postList.length === 0 && (
        // <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
        <WelcomeMessage />
      )}
      {!fethcing && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
