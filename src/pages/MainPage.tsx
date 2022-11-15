import React from 'react'
import { useState, useEffect } from "react";
import Modal from '../components/Modal';
import MainContent from './MainContent';
import SideChat from './SideChat';

const MainPage = () => {
    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
      setModal(true)
    }

    const closeModal = () => {
      setModal(false)
    }
    document.title = "(1) new message"

    useEffect(()=>{
        
    })


  return (
    <>
      {modal && <Modal closeModal={closeModal}/>}
      <MainContent openModal={openModal}/>
      <SideChat/>
    </>
  )
}

export default MainPage

