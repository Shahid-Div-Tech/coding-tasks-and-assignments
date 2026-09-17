import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postlistData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpinner";

function PostList() {
  const { postlist, addInitialPosts } = useContext(postlistData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        console.log("Status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      });

    return () => {
      console.log("this file is remove ");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postlist.length === 0 && <WelcomeMessage />}

      {!fetching && postlist.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
