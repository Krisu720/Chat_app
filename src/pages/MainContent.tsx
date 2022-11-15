import React,{useEffect,useState} from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { publicRequest } from "../apiRequest";
import Card from "../components/Card";

type props = {
  openModal: () => void;
};

type Room = {
  name: string,
  creator: string,
  createdAt: string,
  updatedAt: string,
  __v: number,
  _id: string
}

const MainContent = ({ openModal }: props) => {

  const [cards, setCards] = useState<Room[]>([])

  useEffect(() => {
    
    publicRequest.get('/room').then(data=>setCards(data.data))
  }, [])
  

  return (
    <div className="dark:bg-gray-700 h-screen ml-[400px] p-3 shadow-md ">
      <div className="flex flex-wrap gap-2">
        <div
          className="border-2 dark:border-gray-600 rounded w-60 h-40 dark:bg-gray-800 p-3 flex-col space-y-1 group dark:hover:bg-gray-600 transition-all flex justify-center items-center cursor-pointer"
          onClick={() => openModal()}
        >
          <AiOutlinePlus
            size={75}
            className="dark:text-gray-500 group-hover:text-white transition-all"
          />
        </div>
        {cards.map((item)=><Card key={item._id} name={item.name} creator={item.creator} createdAt={item.createdAt}/>)}
      </div>
    </div>
  );
};

export default MainContent;
