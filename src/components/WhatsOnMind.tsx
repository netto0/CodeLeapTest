import React from "react";
import { GlobalContext } from "../providers/GlobalContext";
import Input from "./Input";
import handleChange from "../utils/handleChange";
import TextArea from "./TextArea";
import Button from "./Button";
import { createPost } from "../api/appServices";
import getPosts from "../utils/getPosts";
import toastifyMessage from "../utils/toastifyMessage";

export default function WhatsOnMind() {
  const { postInfos, setPostInfos, userName, setAllPosts } =
    React.useContext(GlobalContext);
  const validForm = postInfos.title.trim() !== "" && postInfos.content.trim() !== "";

  async function newPost() {
    if (validForm) {
      const response = await createPost(
        userName,
        postInfos.title,
        postInfos.content
      );
      if (response.status == 200) {
        setPostInfos({ title: "", content: "" });
        getPosts(setAllPosts);
        toastifyMessage("success", "New post added sucessfully!");
      } else {
        toastifyMessage("error", `You got an error: ${response}`);
      }
    }
  }
  return (
    <div
      id="whatsOnMind"
      className="flex flex-col gap-4 w-full h-84 p-6 border border-[#999999] rounded-xl"
    >
      <h1 className="font-bold text-xl">What's on your mind?</h1>
      <Input
        label="Title"
        value={postInfos.title}
        placeholder="Hello world"
        handleChange={(e: any) =>
          handleChange(setPostInfos, {
            ...postInfos,
            title: e.target.value,
          })
        }
      />
      <TextArea
        label="Content"
        value={postInfos.content}
        placeholder="Content here"
        handleChange={(e: any) =>
          handleChange(setPostInfos, {
            ...postInfos,
            content: e.target.value,
          })
        }
      />
      <Button text="Create" onClick={newPost} color={validForm ? "blue" : "gray"} />
    </div>
  );
}
