import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import FolderCard from '../components/FolderCard'
import TasksBtn from '../components/TasksBtn'
import FolderCards from '../components/FolderCards'
import TaskCards from '../components/TaskCards'
import TaskCardsUnchecked from '../components/TaskCardsUnchecked'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useMediaQuery from '@mui/material/useMediaQuery'

function FolderCardListDetail() {
  const {idDir} = useParams()
  const intId = parseInt(idDir)
  const folder = useSelector(state => state.folders.find(folder => folder.id === intId))
  // const {name, description, id, tasks} = folder
  return (
    // console.log(name, description, id, tasks)
    <>
      <Link to={'/'} style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'white',
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          boxShadow: '2px 2px 0px 0px black',
          position: 'absolute',
          top: '2%',
          left: '3%'
        }}>
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
      </Link>
      <div className="md:flex md:gap-[15px] lg:flex-row md:flex-col">
        <TaskCards></TaskCards>
        <TaskCardsUnchecked></TaskCardsUnchecked>
      </div>
      <TasksBtn></TasksBtn>
      {
        console.log(folder)
      }
    </>
  )
}

export default FolderCardListDetail