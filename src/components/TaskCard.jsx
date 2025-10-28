import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleChecked, handleUnchecked, removeTasks } from '../data/DataSlice';
import CloseIcon from '@mui/icons-material/Close';


function TaskCard({ task, checked }) {

  const dispatch = useDispatch()
  const { idDir } = useParams()
  const idDirInt = parseInt(idDir)
  const { taskId, taskName, taskDescription } = task

  const [open, setOpen] = useState(false)
  return (
    <div className={`md:w-[350px] w-[200px] ${open ? 'h-[60px]' : 'h-[40px]'} flex relative`} style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0px',
      flexDirection: 'column',
      borderRadius: '10px',
      backgroundColor: checked ? 'white' : "white"
    }}>
      {/* <h2>{taskId}</h2> */}
      <div className="flex " style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0px',
        marginTop: open ? '10px' : '0px',
      }}>
        <label className='flex gap-[20px] md:w-[310px] w-[140px] overflow-hidden justify-start items-center'>
          {
            checked ? (
              <button onClick={() => { dispatch(removeTasks({ folderId: idDirInt, taskId: taskId })) }} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '20px',
                height: '20px',
              }}>
                <CloseIcon sx={{
                  width: '15px',
                  height: '15px'
                }}></CloseIcon>
              </button>
            ) : (
              null
            )
          }
          <input style={{
            width: '17px',
            height: '17px',
            backgroundColor: '#ad73ff'
          }} type="checkbox" checked={checked} onChange={(e) => {
            if (e.target.checked) {
              dispatch(handleChecked({ folderId: idDirInt, taskId: taskId }))
            } else { dispatch(handleUnchecked({ folderId: idDirInt, taskId: taskId })) }
          }} />
          <h4 style={{
            fontWeight: 'bold',
            textDecoration: checked ? 'line-through' : 'none',
            color: checked ? 'yellow' : 'black',
            opacity: checked ? 0.6 : 1
          }}>
            {taskName}
          </h4>
          <span class="checkmark"></span>
        </label>
        <button onClick={() => { open ? setOpen(false) : setOpen(true) }} style={{
          width: '18px',
          height: '18px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {
            open ? (
              <KeyboardArrowUpIcon sx={{
                width: '15px',
                height: '15px'
              }}></KeyboardArrowUpIcon>
            ) : (
              <KeyboardArrowDownIcon sx={{
                width: '15px',
                height: '15px'
              }}></KeyboardArrowDownIcon>
            )
          }
        </button>
        {/* <p>{taskDescription}</p> */}
      </div>
      {
        open ? (
          <div className="mb-[10px] md:ml-[-190px]">
            <p style={{
              fontSize: '12px'
            }}>{taskDescription}</p>
          </div>
        ) : (
          null
        )
      }
    </div>
  )
}

export default TaskCard