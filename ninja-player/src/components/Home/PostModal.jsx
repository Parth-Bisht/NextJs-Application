import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { HiOutlineXCircle } from "react-icons/hi";

const PostModal = ({ post }) => {
  useEffect(() => {
    console.log(post);
  }, [post]);
  return (
    <div>
      <dialog id="my_modal_1" className="modal p-0 rounded-lg">
        <form method="dialog" className="modal-box">
          <button className="absolute right-2 top-2">
            <HiOutlineXCircle className="text-[22px]" />
          </button>
          <PostItem post={post} />
        </form>
      </dialog>
    </div>
  );
};

export default PostModal;
