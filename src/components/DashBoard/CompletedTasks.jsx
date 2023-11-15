import React from 'react'
import FilteredTasks from '../FilteredTasks'

const CompletedTasks = () => {
  return (
    <>
    <div className="border rounded-2xl py-5 px-10 my-5 bg-sky-300  font-medium text-center">Completed</div>

    <FilteredTasks status="completed" />
    </>
  )
}

export default CompletedTasks