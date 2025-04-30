import iPost from "../interfaces/iPost";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { GlobalContext } from "../providers/GlobalContext";

interface iProps {
  post: iPost;
}

export default function PostCard({ post }: iProps) {
  const { setActiveModal, setSelectedPost, loggedUser } =
    React.useContext(GlobalContext);
  const ownPost =
    post.author_ip === loggedUser.ip && post.username === loggedUser.name;

  function handleDelete() {
    setActiveModal("delete");
    setSelectedPost(post);
  }

  function handleEdit() {
    setActiveModal("edit");
    setSelectedPost(post);
  }

  return (
    <div className="h-80 rounded-xl w-full">
      <h1 className="flex justify-between  text-2xl text-white font-bold bg-[#7695ec] px-8 py-4 rounded-t-xl border border-[#777777] border-b-0">
        {post.title}
        {ownPost && (
          <div className="flex gap-8">
            <FaTrashAlt
              className="hover:cursor-pointer"
              onClick={handleDelete}
            />
            <FiEdit className="hover:cursor-pointer" onClick={handleEdit} />
          </div>
        )}
      </h1>

      <div className="flex flex-col gap-4 p-6 relative border border-[#777777] rounded-b-xl border-t-0">
        <div className="flex justify-between">
          <span className="font-bold text-[#777777]">@{post.username}</span>
          <span className="text-[#777777]">
            {formatDistanceToNow(post.created_datetime, { addSuffix: true })}
          </span>
        </div>

        <p className="w-full h-42 break-words line-clamp-7">{post.content}</p>
      </div>
    </div>
  );
}
