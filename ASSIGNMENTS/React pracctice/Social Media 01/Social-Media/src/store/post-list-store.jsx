import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postlist: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
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
  const addPost = (post) => {
    dispatchPostlist({
      type: "ADD_POST",
      payLoad: post,
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

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
