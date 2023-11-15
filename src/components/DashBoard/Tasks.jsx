import React from 'react'
import PendingTasks from './PendingTasks';
import InProgressTasks from './InProgressTasks';
import CompletedTasks from './CompletedTasks';

const Tasks = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1  gap-3 px-3 lg:pr-20 min-h-[calc(100vh-80px)]
    '>
      <div className='col-span-1'>
        <PendingTasks/>


      </div>
      <div className='col-span-1'>
        <InProgressTasks/>


      </div>
      <div className='col-span-1'>
        <CompletedTasks/>


      </div>
    </div>
  )
}

export default Tasks;