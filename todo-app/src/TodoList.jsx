import React, { useState } from 'react'
import './App.css';
import {collapseToast, toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function TodoList() {
  let [task, setTask] = useState('');
  let [data, setData] = useState([]);

let saveData = (e) =>{
  e.preventDefault();
  if(data.includes(task)) {
    toast.error("Task is Allready Includes!");
   
  } else {
    let finaldata = [...data, task];
    setData(finaldata);
    toast.success("Task add Successfully.");
  }
  setTask(''); 

}


let showlist = data.map((v,i)=>{
  return (
    <List key={i} v={v} idx ={i} setData={setData} data={data}/>
  )
})
  return (
    <div className='bg-[var(--body)] w-[100%] h-[100vh]'>
        <ToastContainer/>
        <div className='w-[80%] m-auto p-4'>
            <h1  className='text-[25px] text-center font-semibold'>Todo list</h1>
            <form onSubmit={saveData} className='w-[100%] mt-2 flex'>
              <input type='text'value={task} onChange={(e) => setTask(e.target.value)} name='task' className='flex-[80%] p-1 outline-none text-[16px] px-2'/>
              <button className='flex-[20%] bg-[var(--btn)] p-1 cursor-pointer'>Save</button>
            </form>
            <div className='w-[100%] mt-4 flex'>
              <ul className='w-[100%]'>
                {showlist}
              </ul>
            </div>
        </div>
    </div>
  )
}

function List({v, idx, setData, data}) {
  let deleteList = () =>{
      let finallist = data.filter((v, i) => i!=idx);
      setData(finallist);
  }
  return (
        <li className='w-[100%] p-2 bg-[var(--list)] rounded-lg text-white mb-4 text-[14px] shadow-lg cursor-pointer relative'>{idx+1}. {v} <span onClick={deleteList} className='absolute right-2 text-[12px] cursor-pointer'>&#10060;</span></li>
  )
}