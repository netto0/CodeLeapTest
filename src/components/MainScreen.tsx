import React, { useEffect } from "react";
import { GlobalContext } from "../providers/GlobalContext";
import WhatsOnMind from "./WhatsOnMind";
import PostCard from "./PostCard";
import getPosts from "../utils/getPosts";
import { BiDoorOpen } from "react-icons/bi";

export default function MainScreen() {
  const { loggedUser, setAllPosts, allPosts } = React.useContext(GlobalContext);

  useEffect(() => {
    getPosts(setAllPosts);
  }, []);

  function clearLocalStorage() {
    localStorage.removeItem("username");
    window.location.reload();
  }

  return (
    <div className="w-[800px] min-h-screen h-fit bg-[#FFFFFF] self-center relative">
      <h1 className="flex items-center justify-between text-2xl text-white font-bold bg-[#7695ec] px-8 py-6">
        CodeLeap Network
        <div className="flex gap-1">
          <span className="top-1 right-4 font-bold text-xl">
            @{loggedUser.name}
          </span>
          <BiDoorOpen
            className="hover:cursor-pointer text-3xl"
            onClick={clearLocalStorage}
          />
        </div>
      </h1>
      <div className="flex flex-col p-4 gap-4">
        <WhatsOnMind />
        {allPosts.map((item) => (
          <PostCard post={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
