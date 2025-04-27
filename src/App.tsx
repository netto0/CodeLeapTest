import React, { useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import { GlobalContext } from "./providers/GlobalContext";
import MainScreen from "./components/MainScreen";
import DeleteModal from "./components/DeleteModal";
import { getIP } from "./api/appServices";
import EditModal from "./components/EditModal";
import { Bounce, ToastContainer } from "react-toastify";

export default function App() {
  const { setLoggedUser, activeModal, setUserName } =
    React.useContext(GlobalContext);
  const localUsername = localStorage.getItem("username");

  async function giveMeIp() {
    const response = await getIP();
    if (response) {
      setLoggedUser({ ip: response, name: localUsername });
    }
  }

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);

  useEffect(() => {
    giveMeIp();
    setUserName(localUsername);
  }, []);

  return (
    <div
      className={`flex justify-center font-roboto relative ${
        activeModal && "overflow-hidden"
      }`}
    >
      {/* <ContextPreview /> */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {localUsername ? <MainScreen /> : <WelcomeScreen />}
      {activeModal && (
        <div
          id="backgroundBlur"
          className="fixed w-screen h-screen flex justify-center items-center"
        >
          <div className="absolute w-full h-full bg-gray-300 opacity-50 z-10" />
          {activeModal == "delete" && <DeleteModal />}
          {activeModal == "edit" && <EditModal />}
        </div>
      )}
    </div>
  );
}
