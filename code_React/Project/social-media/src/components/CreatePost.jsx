import { useContext, useRef } from "react";
import { PostList } from "../store/post-list";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          ref={userIdElement}
          placeholder="Your User Id"
          type="type"
          className="form-control"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          placeholder="How are you feeling today..."
          type="type"
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Conent
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          placeholder="Tell us more about it"
          type="type"
          className="form-control"
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          ref={reactionsElement}
          placeholder="How many people reacted to this post"
          type="type"
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          ref={tagsElement}
          placeholder="Please enter tags using space"
          type="type"
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
