import React from 'react'
import './App.css';

export default function TodoList() {
  return (
    <div className='bg-[var(--body)] w-[100%] h-[100vh]'>
        <div className='w-[80%] m-auto p-4'>
            <h1  className='text-[25px] text-center font-semibold'>Todo list</h1>
            <div className='w-[100%] mt-2 flex'>
              <input type='text' className='flex-[80%] p-1 outline-none text-[16px] px-2'/>
              <button className='flex-[20%] bg-[var(--btn)] p-1 cursor-pointer'>Save</button>
            </div>
            <div className='w-[100%] mt-4 flex'>
              <ul className='w-[100%]'>
                <List/>
              </ul>
            </div>
        </div>
    </div>
  )
}

function List() {
  return (
        <li className='w-[100%] p-2 bg-[var(--list)] rounded-lg text-white mb-4 text-[14px] shadow-lg cursor-pointer relative'>Html <span className='absolute right-2 text-[12px] cursor-pointer'>&#10060;</span></li>
  )
}