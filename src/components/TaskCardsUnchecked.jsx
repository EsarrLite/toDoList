import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TaskCard from './TaskCard'

function TaskCardsUnchecked() {
  const { idDir } = useParams()
  const idInt = parseInt(idDir)
  const folder = useSelector(state => state.folders.find(folder => folder.id === idInt))

  const tasks = folder.tasks

  const checkedTask = tasks.find((task) => task.completed === true)
  return (
    <>
      <div className="md:w-[430px] md:h-[200px] w-[260px] h-[160px] mt-[30px] mb-[30px]" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        backgroundColor: 'white',
        boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)'
      }}>
        <div className="pt-2.5 pb-2.5 md:w-[370px] md:h-[150px] w-[225px] h-[150px] gap-2 grid" style={{
          overflow: 'auto',
          borderRadius: '10px'
        }}>
          {
            !checkedTask && tasks.length > 0 ? (
              <div className="md:w-[360px] md:h-[120px] w-[200] h-[55px] flex justify-center items-center">
                <h2 className='md:text-[25px] text-[16px] font-bold text-white'>No completed tasks yet</h2>
              </div>
            ) : (
              null
            )
          }
          {
            tasks.length > 0 ? (
              <>
                {
                  tasks.map((task, index) => (
                    task.completed === true ? (
                      <React.Fragment key={index}>
                        <TaskCard task={task} checked={true}></TaskCard>
                      </React.Fragment>
                    ) : (
                      null
                    )
                  ))
                }
              </>
            ) : (
              <div className="md:w-[360px] md:h-[120px] w-[200] h-[55px] flex justify-center items-center">
                <h2 className='md:text-[25px] text-[16px] font-bold text-white'>No tasks yet</h2>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default TaskCardsUnchecked