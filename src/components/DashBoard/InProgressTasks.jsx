import React from 'react'
import FilteredTasks from '../FilteredTasks'

const InProgressTasks = () => {
  return (
    <>

    <div className="border rounded-2xl py-5 px-10 my-5 bg-blue-300  font-medium text-center mb-5">InProgress</div>

    <FilteredTasks status="InProgress" />
    </>
  )
}

export default InProgressTasks;