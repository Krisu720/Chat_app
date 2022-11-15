import { store } from "../store"
import {useState} from 'react'
import {useNavigate} from 'react-router'
const WelcomePage = () => {
  const {username,setUsername} = store()
  const [input, setInput] = useState<string>('')
  
  const navigate = useNavigate()


  const sendData = (): void => {
      setUsername(input)
      navigate('chats')
  }

  return (
    <div className='dark:bg-gray-700 h-screen flex justify-center items-center'>
      <div className='dark:bg-gray-800 h-80 w-[33rem] rounded flex flex-col p-4 gap-11 '>
        <div className='dark:text-white text-3xl font-bold text-center'>Wprowadź swoje imię</div>
        <input type='text' className=' outline-none p-2 rounded dark:bg-gray-500 dark:focus:bg-gray-400 text-xl dark:text-white' value={input} onChange={(e)=>setInput(e.target.value)}  />
        <button className='dark:text-white bg-black py-2 px-4 rounded-full hover:bg-slate-700 transition-all' onClick={()=>sendData()}>Dalej</button>
      </div>
    </div>
  )
}

export default WelcomePage