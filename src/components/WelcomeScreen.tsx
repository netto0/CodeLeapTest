import React from "react";
import { GlobalContext } from "../providers/GlobalContext";
import Input from "./Input";
import Button from "./Button";
import handleChange from "../utils/handleChange";
import toastifyMessage from "../utils/toastifyMessage";

export default function WelcomeScreen() {
  const { userName, setUserName, setLoggedUser, loggedUser } =
    React.useContext(GlobalContext);

  function logUser() {
    setLoggedUser({ ...loggedUser, name: userName });
    localStorage.setItem("username", userName);
    toastifyMessage("success", `User "${userName}" logged sucessfully!`)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex w-[500px] h-[205px] px-4 py-6 flex-col gap-4 rounded-lg bg-[#FFFFFF] shadow-lg">
        <h1 className="font-bold text-xl">Welcome to CodeLeap network!</h1>
        <Input
          label="Please enter your username"
          placeholder="John doe"
          value={userName || ""}
          handleChange={(e: any) => handleChange(setUserName, e.target.value)}
        />
        <Button text="ENTER" onClick={logUser} />
      </div>
    </div>
  );
}
