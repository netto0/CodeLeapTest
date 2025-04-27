import React from "react";
import Button from "./Button";
import { GlobalContext } from "../providers/GlobalContext";
import handleCancel from "../utils/handleCancelModal";
import Input from "./Input";
import TextArea from "./TextArea";
import handleChange from "../utils/handleChange";
import { editPost } from "../api/appServices";
import getPosts from "../utils/getPosts";
import toastifyMessage from "../utils/toastifyMessage";

export default function EditModal() {
  const {
    selectedPost,
    setSelectedPost,
    setActiveModal,
    loggedUser,
    setAllPosts,
  } = React.useContext(GlobalContext);

  function cancelModal() {
    handleCancel(setActiveModal, setSelectedPost);
  }

  async function handleSave() {
    if (
      selectedPost.author_ip === loggedUser.ip &&
      selectedPost.username === loggedUser.name
    ) {
      const payload = {
        title: selectedPost.title,
        content: selectedPost.content,
      };
      const response = await editPost(selectedPost.id, payload);
      if (response.status === 200) {
        cancelModal();
        getPosts(setAllPosts);
        toastifyMessage("success", "Post updated sucessfully!");
      }
    } else {
      cancelModal();
      toastifyMessage("error", "You can only edit your own posts!");
    }
  }

  return (
    <div className="flex flex-col gap-6 bg-[#FFFFFF] w-xl h-fit p-6 rounded-xl z-20">
      <h1 className="font-bold text-xl">Edit item</h1>
      <Input
        label="Title"
        placeholder="Hello World"
        value={selectedPost?.title}
        handleChange={(e: any) =>
          handleChange(setSelectedPost, {
            ...selectedPost,
            title: e.target.value,
          })
        }
      />
      <TextArea
        label="Content"
        placeholder="Content here"
        value={selectedPost?.content}
        handleChange={(e: any) =>
          handleChange(setSelectedPost, {
            ...selectedPost,
            content: e.target.value,
          })
        }
      />
      <div className="flex gap-4 self-end">
        <Button text="Cancel" onClick={cancelModal} color="white" />
        <Button text="Save" onClick={handleSave} color="green" />
      </div>
    </div>
  );
}
