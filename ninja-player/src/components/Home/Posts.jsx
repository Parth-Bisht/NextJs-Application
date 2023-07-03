import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostModal from "./PostModal";

const Posts = ({ posts }) => {
  const [post, setPost] = useState();
  return (
    <div>
      <PostModal post={post} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10">
        {posts.map((item, ind) => (
          <div
            key={ind}
            className="cursor-pointer"
            onClick={() => {
              setPost(item);
              window.my_modal_1.showModal();
            }}
          >
            <PostItem post={item} modal={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
