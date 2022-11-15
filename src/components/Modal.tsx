import React, { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { publicRequest } from "../apiRequest";
import {store} from '../store'
type props = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: props) => {

  const {username} = store()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const createRoom = () => {
    publicRequest.post('/room',{
      name,
      password,
      username
    }).then(data=>console.log(data.data))
    closeModal()
    setName('')
    setPassword('')
  }


  return (
    <div className="absolute z-10 h-screen w-full flex justify-center items-center backdrop-blur-sm">
      <div className="dark:bg-slate-900 h-80 w-[30rem] rounded shadow-md absolute z-20">
        <AiOutlineCloseCircle
          size={50}
          className="dark:text-gray-300 dark:hover:text-white absolute right-3 top-3 transition-all cursor-pointer"
          onClick={() => closeModal()}
        />
        <div className="p-4 flex flex-col justify-around h-full">
          <div className="text-white text-3xl font-bold">Stwórz pokój</div>
          <div className="text-white">Nazwa:</div>
          <input
            type="text"
            className=" outline-none p-2 rounded dark:bg-gray-500  dark:text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="text-white">hasło:</div>
          <div className=" rounded dark:bg-gray-500 dark:focus:bg-gray-400 flex  items-center">
            <input
              type={showPassword ? "text" : "password"}
              className="flex-1 p-2 outline-none rounded dark:bg-gray-500   dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                size={20}
                className="m-2 cursor-pointer dark:text-white"
                onClick={() => setShowPassword((prevShow) => !prevShow)}
              />
            ) : (
              <AiOutlineEye
                size={20}
                className="m-2 cursor-pointer dark:text-white"
                onClick={() => setShowPassword((prevShow) => !prevShow)}
              />
            )}
          </div>
          <button onClick={()=>createRoom()} className="dark:bg-green-700 hover:dark:bg-green-600 transition-all dark:text-white py-1 px-3 text-lg font-semibold  rounded-full">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
