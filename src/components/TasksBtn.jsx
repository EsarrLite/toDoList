import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addTasks } from '../data/DataSlice';

function TasksBtn() {

    const dispatch = useDispatch()

    const {idDir} = useParams()
    const intId = parseInt(idDir)
    const folder = useSelector(state => state.folders.find(folder => folder.id === intId))
    const {name, description, id, tasks} = folder

    const [open, setOpen] = useState(false)
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const handleSubmit = () => {
      const exists = tasks.some((task) => task.taskName.toLowerCase() === taskName.toLowerCase())
      if (taskName === "") {
        alert("Task name cannot be empty")
      }

      else if (!exists) {
        dispatch(addTasks({
          folderId: id,
          task: {
            taskId: folder.tasks.length + 1,
            taskName: taskName,
            taskDescription: taskDescription,
            completed: false
          }
        }))
      } 
      
      else {
          alert("A task with this name already exists!") // optional feedback
      }
    }
  return (
    <>
      {
        open ? (
          <div className="md:w-[320px] md:h-[350px] w-[230px] h-[330px] bg-white absolute top-[37%] right-[5%] md:top-[30%] md:right-[5%] rounded-[20px]">
            <div className="p-[15px]">
              <ul>
                <li>
                  <label htmlFor="task-name" className="block mb-2 font-bold">
                    Item Name
                  </label>
                  <input className='p-2' id='task-name' type="text" placeholder='Enter . . .' autoFocus style={{
                    border: '2px solid black',
                    borderRadius: '8px'
                  }} value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                </li>
                <li className='absolute top-[16px] right-[15px] font-bold'>
                  <h4>{name} Folder</h4>
                </li>
                <li>
                  <label htmlFor="folder-name" className="block mb-2 font-bold">
                    Description
                  </label>
                  <textarea
                    className="p-2 md:w-[290px] w-[200px] md:h-[150px] h-[140px] flex justify-start items-start"
                    id="folder"
                    placeholder="Enter . . ."
                    autoFocus
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                  />
                </li>
              </ul>
              <button 
                className='w-[70px] h-[35px] rounded-[6px] bg-purple-500 absolute right-[15px] bottom-[15px]'
                onClick={() => {handleSubmit(), setTaskName(""), setTaskDescription("")}}
              >Submit</button>
            </div>
          </div>
          ) : (
            null
        )
      }
      <button className='md:right-[200px] md:bottom-[20px] right-[20px] bottom-[20px]' style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#FED74E',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
        "&:hover": {
          backgroundColor: '#FFE27A'
        },
        position: 'absolute',
      }} onClick={() => {open ? setOpen(false) : setOpen(true)}}>
        {
          open ? (
            <CloseIcon></CloseIcon>
          ) : (
            <AddIcon></AddIcon>
          )
        }
      </button>
    </>
  )
}

export default TasksBtn