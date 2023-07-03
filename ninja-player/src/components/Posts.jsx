import React, { useEffect } from "react";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div>
      {posts.map((item, ind) => (
        <PostItem post={item} key={ind} />
      ))}
    </div>
  );
};

export default Posts;
