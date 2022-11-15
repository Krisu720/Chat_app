import React from "react";
import {  AiOutlineClockCircle } from "react-icons/ai";

type props = {
  creator: string,
  name: string,
  createdAt: String
}

const Card = ({creator,name,createdAt}:props) => {
  return (
    <div className="border-2 dark:border-gray-600 rounded w-60 h-40 dark:bg-gray-800 p-3 flex-col space-y-1">
      <p className="text-xl font-bold dark:text-white">{name}</p>
      <p className="text-md font-bold dark:text-white">{creator}</p>
      <p className="text-sm  dark:text-white">2</p>
      <div className="flex items-center text-white space-x-1">
        <AiOutlineClockCircle className="dark:text-white " />
        <p className="text-xs">{createdAt}</p>
      </div>
      <button className="dark:bg-green-700 hover:dark:bg-green-600 transition-all dark:text-white py-1 px-3 text-lg font-semibold  rounded-full">
        Join
      </button>
    </div>
  );
};

export default Card;
