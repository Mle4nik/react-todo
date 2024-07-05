import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io"

const AddTodo = ({ addTasks, addEnterTasks }) => {

    const [title, setTitle] = useState('')

    return (
        <div className='flex'>
            <div className='bg-slate-100 rounded-md flex justify-center items-center w-full mr-2'>
                <input value={title} onKeyDown={addEnterTasks} placeholder="to do something..." className="mr-4 pl-4 py-3 w-full bg-slate-100 rounded-md focus:outline-none text-slate-500 whitespace-nowrap text-ellipsis" type="text" onChange={(el) => setTitle(el.target.value)} />
                {title.length > 0 ?
                    <IoIosCloseCircle onClick={() => setTitle('')} className='text-xl mr-3 text-gray-400 cursor-pointer' />
                    :
                    null
                }
            </div>
            <button className='w-1/5 bg-purple-400 rounded-md text-white' onClick={() => (addTasks(title), setTitle(''))}>add</button>
        </div>
    );
};

export default AddTodo;