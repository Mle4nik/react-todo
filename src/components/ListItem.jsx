import React, { useState } from 'react';
import { MdCheckBox } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const ListItem = ({ tasks, deleteTasks, checkedTasks, changeTitle }) => {

  return (
    <div className='w-full'>
      <div className='flex justify-between w-full my-4'>
        <div className='mobile:text-xs'>Created tasks <span className='bg-slate-200 rounded-full px-2 mobile:text-xs'>{tasks.length}</span></div>
        <div className='mobile:text-xs'>Completed tasks <span className='bg-slate-200 rounded-full px-2 mobile:text-xs'>{tasks.filter(el => { return el.seen === true }).length} of {tasks.length}</span></div>
      </div>
      <ul className='flex flex-col justify-start items-start bg-slate-100 rounded-xl mobile:py-0.5 mobile:px-2 mobile:max-h-[66vh] overflow-scroll'>
        {
          tasks.length ?
            tasks.toReversed().map(task => {
              return (
                <li key={task.id} className='flex justify-between rounded-md items-center bg-white w-full mobile:my-1 mobile:py-0 text-sm duration-1000'>
                  <Task task={task} deleteTasks={deleteTasks} checkedTasks={checkedTasks} changeTitle={changeTitle} />
                </li>
              )
            })
            :
            <div className='w-full flex justify-center items-center'>
              <h2 className='text-center bg-gray-300 w-32 rounded-md py-1'>No Todo Found</h2>
            </div>
        }
      </ul>
    </div>
  );
};

function Task({ task, deleteTasks, checkedTasks, changeTitle }) {

  const [edit, setEdit] = useState(false)
  const [changeName, setChangeName] = useState(task.title)

  return (
    <>
      <div className="flex items-center w-full">
        <div className='flex'>
          {/* <input type="checkbox" checked={task.seen} onChange={(el) => {
            checkedTasks(task.id, el.target.checked)
          }} /> */}
          <MdCheckBox className={`${task.seen ? 'text-purple-400' : 'text-gray-200'} mobile:mx-2 mobile:text-2xl cursor-pointer duration-300`} onClick={() => {(checkedTasks(task.id, !task.seen))}}/>
        </div>
        {!edit ?
          <p className='w-[44vw] whitespace-nowrap text-ellipsis overflow-hidden'><span className={`font-medium text-base mobile:text-md ${task.seen ? 'line-through opacity-50' : ''}`}>{task.title}</span><br /><span className={`mobile:text-[10px] ${task.seen ? 'opacity-50' : ''}`}>{task.created}</span></p>
          :
          <>
            <input autoFocus value={changeName} className='w-[44vw] whitespace-nowrap text-ellipsis focus:outline-none mobile:my-2.5 mobile:py-0.5' type="text" onChange={(el) => { setChangeName(el.target.value) }} />
          </>
        }
      </div>
      <div className='flex items-center'>
        <div>
          {!edit ?
            <button className='bg-gray-200 hover:bg-gray-300 rounded-sm mobile:px-1 mobile:py-0.5 mobile:text-[12px] cursor-pointer duration-300' onClick={() => setEdit(!edit)}>edit</button>
            :
            <button className='bg-gray-200 hover:bg-gray-300 rounded-sm mobile:px-1 mobile:py-0.5 mobile:text-[12px] cursor-pointer duration-300' onClick={() => (changeTitle(task.id, changeName), setEdit(!edit))}>save</button>
          }
        </div>
        <div onClick={() => deleteTasks(task.id)} className='bg-gray-200 hover:bg-gray-300 rounded-sm mobile:px-1 mobile:py-1 mobile:mx-3 cursor-pointer duration-300'>
          <FaTrash className='text-base text-gray-600 mobile:text-sm' />
        </div>
      </div>
    </>
  )
}


export default ListItem;