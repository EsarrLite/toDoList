import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-regular-svg-icons';
import NavBar from './components/NavBar';
import FolderCard from './components/FolderCard';
import FolderCardsList from './pages/folderCardsList';
import { Route, Routes } from 'react-router-dom';
import FolderCardListDetail from './pages/FolderCardListDetail';
import Stats from './pages/Stats';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FolderCardsList></FolderCardsList>}></Route>
        <Route path='/:idDir' element={<FolderCardListDetail></FolderCardListDetail>}></Route>
        <Route path='/stats' element={<Stats></Stats>}></Route>
      </Routes>
    </>
  )
}

export default App