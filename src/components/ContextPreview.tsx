import React from "react";
import { GlobalContext } from "../providers/GlobalContext";

export default function ContextPreview() {
  const { userName, postInfos, allPosts, selectedPost, loggedUser } = React.useContext(GlobalContext);
    return (
    <div
      id="contextPreview"
      className="flex flex-col fixed bottom-0 left-0 z-10"
    >
      <span>
        <strong>UserName: </strong>
        {userName}
      </span>
      <span>
        <strong>LoggedName: </strong>
        {loggedUser.name}
      </span>
      <span>
        <strong>LoggedIP: </strong>
        {loggedUser.ip}
      </span>
      <span>
        <strong>PostTitle: </strong>
        {JSON.stringify(postInfos)}
      </span>
      <span>
        <strong>AllPosts: </strong>
        {JSON.stringify(allPosts)}
      </span>
      <span>
        <strong>SelectedPost: </strong>
        {JSON.stringify(selectedPost)}
      </span>
    </div>
  );
}
