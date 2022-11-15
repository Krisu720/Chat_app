import React from 'react'
import { useState, useEffect } from "react";
import { AiOutlineSend} from "react-icons/ai";
import { io } from "socket.io-client";
import { store } from '../store';

type message = {
    message: string;
    dir: boolean;
    author: string;
  };

  const socket = io("localhost:3001");
  socket.emit("join_global",'global')

const SideChat = () => {

    const {username} = store()

    const [input, setInput] = useState<string>("");
    const [myMessages, setMyMessages] = useState<message[]>([]);

    const data = new Date();

    const sendMessageTextArea = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
      ): void => {
        if (e.key === "Enter" && e.shiftKey == false) {
          e.preventDefault();
          if (input !== "") {
            setMyMessages((prev) => [
              ...prev,
              { message: input, dir: false, author: "me" },
            ]);
            setInput("");
            socket.emit("send_message", {
              message: input,
              dir: true,
              author: username,
            });
          }
        }
      };
    
    
      const sendMessage = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
        e.preventDefault();
        if (input !== "") {
          setMyMessages((prev) => [
            ...prev,
            { message: input, dir: false, author: "me" },
          ]);
          setInput("");
          socket.emit("send_message", {
            message: input,
            dir: true,
            author: username,
          });
        }
      };

      useEffect(()=>{
        
      })

      useEffect(() => {
        socket.on("receive_message", (data) => {
          setMyMessages((prev) => [...prev, data]);
          console.log(data)
        });
      }, [socket]);

    return (
    <div className="absolute left-0 bottom-0 h-full bg-gray-200 dark:bg-gray-900 ">
        <div className=" w-[400px] h-full  flex flex-col">
          <div className="flex-1 overflow-y-auto p-2">
            {myMessages.map((item, index) => (
              <div
                key={index}
                className={`my-1 flex ${
                  item.dir ? "justify-start" : "justify-end"
                } w-full`}
              >
                <div>
                  <div className="flex justify-between">
                    <p className="dark:text-gray-400">{item.author}</p>
                    <p className="dark:text-gray-500">
                      {data.getHours() + ":"}
                      {data.getMinutes() < 10
                        ? "0" + data.getMinutes()
                        : data.getMinutes()}
                    </p>
                  </div>
                  <div
                    className={`'text-md dark:text-white ${
                      item.dir
                        ? "bg-lime-500 dark:bg-lime-900"
                        : "bg-sky-500 dark:bg-sky-900"
                    }  w-40 rounded p-3`}
                  >
                    {item.message}
                    {/* <div className="text-sm text-gray-500 dark:text-gray-300">
                  {item.author} - {data.getHours() + ":"}
                  {data.getMinutes() < 10
                    ? "0" + data.getMinutes()
                    : data.getMinutes()}
                </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form className="bg-gray-800 rounded border-gray-700 p-2 flex items-center justify-between px-10">
            <textarea
              rows={3}
              className="p-3 h-16 resize-none outline-none blue-400 rounded bg-gray-700 dark:text-white"
              onKeyDown={(e) => sendMessageTextArea(e)}
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              className="p-2 bg-white dark:bg-gray-700 rounded-full flex justify-center items-center hover:bg-gray-600 transition-all"
              onClick={(e) => sendMessage(e)}
            >
              {" "}
              <AiOutlineSend className="dark:text-white" />
            </button>
          </form>
        </div>
      </div>
  )
}

export default SideChat