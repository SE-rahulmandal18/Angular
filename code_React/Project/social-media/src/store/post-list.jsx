import { createContext } from "react";

const PostList = createContext({ children });

const PostListProvider = () => {
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvider;
