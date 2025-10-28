import React from 'react'
import { useSelector } from 'react-redux'
import BasicPie from '../components-2/BasicPie'

function Stats() {
    const folders = useSelector((state) => state.folders)

    const highFolders = folders.filter((folder) => folder.level === 1)
    const mediumFolders = folders.filter((folder) => folder.level === 2)
    const lowFolders = folders.filter((folder) => folder.level === 3)

    const tasks = folders.flatMap((folder) => folder.tasks || [])
    const checkedTasks = tasks.filter((task) => task.completed === true)
    const unCheckedTasks = tasks.filter((task) => task.completed === false)

    console.log(tasks.length)
    console.log(checkedTasks.length)
    console.log(unCheckedTasks.length)

  return (
    <>
      <div className="absolute top-[30%]">
        <BasicPie highFolder={highFolders} mediumFolder={mediumFolders} lowFolder={lowFolders}></BasicPie>
      </div>
    </>
  )
}

export default Stats