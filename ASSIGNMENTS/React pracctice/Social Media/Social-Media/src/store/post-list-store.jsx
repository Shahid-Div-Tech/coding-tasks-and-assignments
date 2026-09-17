import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postlistReducer = (currentPostlist, action) => {
  let newPostList = currentPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostlist.filter(
      (post) => post.id !== action.payLoad.postId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payLoad, ...currentPostlist];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payLoad.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    dispatchPostlist({
      type: "ADD_POST",
      payLoad: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostlist({
      type: "ADD_INITIAL_POSTS",
      payLoad: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payLoad: {
        postId,
      },
    });
  };

  const [postlist, dispatchPostlist] = useReducer(postlistReducer, []);

  return (
    <PostList.Provider
      value={{ postlist, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
