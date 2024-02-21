import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},

  deletePost: () => {},
});

//reducer function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",

        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,

        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
