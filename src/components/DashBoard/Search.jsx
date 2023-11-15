import React from 'react'
import TaskCard from '../TaskCard'

const Search = ({tasks}) => {
  return (
   <>
      
    <div className="w-full">
    

      <div className="w-full">
        {tasks?.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
          ></TaskCard>
        ))}
      </div>
    </div>

    <div
      className="flex justify-end mx-28 mb-0"
    ></div>
  </>
  )
}

export default Search