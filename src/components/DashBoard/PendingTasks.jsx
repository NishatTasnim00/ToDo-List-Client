import React from 'react'
import FilteredTasks from '../FilteredTasks'

const PendingTasks = () => {
  return (
    <>
    <div className="border rounded-2xl py-5 px-10 my-5 bg-red-300 text-center font-medium">Pending</div>

    <FilteredTasks status="pending" />
    </>
  )
}

export default PendingTasks