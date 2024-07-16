import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'     

const ExamCard = ({exam}) => {
    

    const router = useRouter();

    const onStart=()=>{
        router.push('/dashboard/exam/'+exam?.oralId)
    }

    const onFeedback = () => {
        router.push('/dashboard/exam/'+exam?.oralId+"/feedback")
    }

  return (
    <div className='border shadow-md rounded-lg p-4 bg-gray-800'>
        <h2 className='font-semibold text-lg text-blue-400 mb-1'>{exam?.examTitle}</h2>
        <h3 className='text-sm text-gray-300 mb-2'>{exam?.examLevel} Years of Experience</h3>

        <p className='text-xs text-gray-400 mb-3'>Created At: {exam.createdAt}</p>

        <div className='flex justify-between gap-4'>
            <Button size="sm" variant="outline" className="flex-grow text-white border-blue-500 bg-transparent" onClick={onFeedback}>Feedback</Button>
            <Button size="sm" className="flex-grow bg-blue-700 hover:border hover:bg-transparent" onClick={onStart}>Start</Button>
        </div>
    </div>

  )
}

export default ExamCard