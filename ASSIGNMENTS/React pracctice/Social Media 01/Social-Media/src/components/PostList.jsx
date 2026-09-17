import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostList as postlistData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpinner";

function PostList() {
  const { postlist, fetching, addInitialPosts } = useContext(postlistData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postlist.length === 0 && <WelcomeMessage />}

      {!fetching && postlist.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
