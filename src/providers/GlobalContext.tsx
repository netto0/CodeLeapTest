import React, { useState } from "react";
import iPost from "../interfaces/iPost";

interface iProps {
  children: React.ReactNode;
}

type GlobalContextType = {
  userName: string;
  setUserName: any;
  loggedUser: {name: string, ip: string};
  setLoggedUser: any;
  postInfos: { title: string; content: string };
  setPostInfos: any;
  allPosts: iPost[];
  setAllPosts: any;
  selectedPost: iPost;
  setSelectedPost: any;
  activeModal: "delete" | "edit" | boolean;
  setActiveModal: any
};

const initialValues = {
  userName: "",
  setUserName: () => {},
  loggedUser: {name: "", ip: ""},
  setLoggedUser: () => {},
  postInfos: { title: "", content: "" },
  setPostInfos: () => {},
  allPosts: [],
  setAllPosts: () => {},
  selectedPost: {
    id: 0,
    username: "",
    created_datetime: "",
    title: "",
    content: "",
    author_ip: "",
  },
  setSelectedPost: () => {},
  activeModal: false,
  setActiveModal: () => {}
};

export const GlobalContext =
  React.createContext<GlobalContextType>(initialValues);

export const GlobalProvider = ({ children }: iProps) => {
  const [userName, setUserName] = useState(initialValues.userName);
  const [loggedUser, setLoggedUser] = useState(initialValues.loggedUser);
  const [postInfos, setPostInfos] = useState(initialValues.postInfos);
  const [allPosts, setAllPosts] = useState(initialValues.allPosts);
  const [selectedPost, setSelectedPost] = useState(initialValues.selectedPost);
  const [activeModal, setActiveModal] = useState(initialValues.activeModal);

  return (
    <GlobalContext.Provider
      value={{
        userName,
        setUserName,
        loggedUser,
        setLoggedUser,
        postInfos,
        setPostInfos,
        allPosts,
        setAllPosts,
        selectedPost,
        setSelectedPost,
        activeModal,
        setActiveModal
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
