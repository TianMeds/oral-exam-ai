import React from 'react'
import AddNewExam from '../_components/AddNewExam'

const Dashboard = () => {
  return (
    <div className='p-10'>
    <h2 className='text-white font-bold text-2xl'>Dashboard</h2>
    <h2 className='text-gray-500'>Create and start your AI Oral Proficiency Exam</h2>

    <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <AddNewExam/>
    </div>
    </div>
  )
}

export default Dashboard