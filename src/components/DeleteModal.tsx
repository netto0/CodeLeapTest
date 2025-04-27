import React from "react";
import Button from "./Button";
import { GlobalContext } from "../providers/GlobalContext";
import { deletePost } from "../api/appServices";
import getPosts from "../utils/getPosts";
import handleCancel from "../utils/handleCancelModal";
import toastifyMessage from "../utils/toastifyMessage";

export default function DeleteModal() {
  const {
    setActiveModal,
    setSelectedPost,
    selectedPost,
    loggedUser,
    setAllPosts,
  } = React.useContext(GlobalContext);

  function cancelModal() {
    handleCancel(setActiveModal, setSelectedPost);
  }

  async function handleDelete() {
    if (
      selectedPost.author_ip === loggedUser.ip &&
      selectedPost.username === loggedUser.name
    ) {
      const response = await deletePost(selectedPost.id);
      if (response.status === 204) {
        cancelModal();
        getPosts(setAllPosts);
        toastifyMessage("success", "Post deleted sucessfully!");
      }
    } else {
      toastifyMessage("error", "You can only delete your own posts!");
      cancelModal();
    }
  }

  return (
    <div className="flex flex-col gap-6 bg-[#FFFFFF] w-xl h-fit p-6 rounded-xl z-20">
      <h1 className="font-bold text-xl">
        Are you sure you want to delete this item?
      </h1>
      <div className="flex gap-4 self-end">
        <Button text="Cancel" onClick={cancelModal} color="white" />
        <Button text="Delete" onClick={handleDelete} color="red" />
      </div>
    </div>
  );
}
