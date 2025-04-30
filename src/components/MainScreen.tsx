import React, { useEffect, useState } from "react";
import { GlobalContext } from "../providers/GlobalContext";
import WhatsOnMind from "./WhatsOnMind";
import PostCard from "./PostCard";
import getPosts from "../utils/getPosts";
import { BiDoorOpen } from "react-icons/bi";
import { LuMenu } from "react-icons/lu";
import { FiCameraOff } from "react-icons/fi";

export default function MainScreen() {
  const { loggedUser, setAllPosts, allPosts } = React.useContext(GlobalContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    getPosts(setAllPosts);
  }, []);

  function clearLocalStorage() {
    localStorage.removeItem("username");
    window.location.reload();
  }

  return (
    <div className="w-[800px] min-h-dvh bg-[#FFFFFF] self-center relative max-w-dvw sm:max-w-[800px] overflow-hidden">
      <h1 className="flex items-center justify-between text-2xl text-white font-bold bg-[#7695ec] px-8 py-6 select-none z-30">
        CodeLeap Network
        <div className="hidden sm:flex gap-1 w-[30%] justify-end">
          <span
            title={`@${loggedUser.name}`}
            className="top-1 right-4 font-bold text-lg truncate max-w-80%"
          >
            @{loggedUser.name}
          </span>
          <BiDoorOpen
            className="hover:cursor-pointer text-3xl w-[20%]"
            onClick={clearLocalStorage}
          />
        </div>
        <LuMenu
          className={`sm:hidden text-3xl z-10 ${
            mobileMenu && "text-[#b6b6b6]"
          } transition-all`}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </h1>
      <div className="flex flex-col p-4 gap-4 w-dvw sm:w-full relative h-full">
        <div
          className={`bg-[#7695ec] absolute shadow-lg ${
            mobileMenu ? "right-0" : "-right-200"
          } top-0 sm:hidden flex w-2/3 h-10 rounded-xl justify-between items-center px-4 text-white z-0 transition-all`}
        >
          <span
            title={`@${loggedUser.name}`}
            className="top-1 right-4 font-bold text-lg truncate flex-2/3"
          >
            @{loggedUser.name}
          </span>
          <BiDoorOpen
            className="hover:cursor-pointer text-3xl flex-1"
            onClick={clearLocalStorage}
          />
        </div>

        <WhatsOnMind />
        <div className="flex flex-col gap-4 select-none h-full items-center">
          {allPosts.length > 0 ? (
            allPosts.map((item) => <PostCard post={item} key={item.id} />)
          ) : (
            <div className="flex flex-col justify-center items-center gap-4 sm:pt-20 pt-4">
              <FiCameraOff className="text-9xl text-[#999999]" />
              <h3 className="text-3xl text-[#999999]">No posts yet :(</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
