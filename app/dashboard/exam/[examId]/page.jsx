'use client'
import React, { useEffect, useState } from 'react'
import { db } from '../../../../utils/db'
import { OralExam } from '../../../../utils/schema'
import { eq } from 'drizzle-orm'
import Webcam from 'react-webcam'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import Link from 'next/link'



const Exam = ({params}) => {
    const [examData, setExamData] = useState(null); // Initialize as null
    const [webcamEnabled, setWebcamEnabled] = useState(false);

    useEffect(() => {
        console.log(params.examId)
        GetExamDetails();
    }, [params.examId])

    const GetExamDetails = async() => {
        const result = await db.select().from(OralExam)
        .where(eq(OralExam.examId,params.examId))

        console.log(result[0])
        setExamData(result[0]);
    }


    if (!examData) {
        return (
            <div className='my-10 flex items-center justify-center flex-col'>
                <h2 className='font-bold text-2xl'>Loading...</h2>
            </div>
        );
    }

  return (
    <div className='my-10 flex items-center justify-center flex-col'>
    <h2 className='font-bold text-2xl text-white'>Let's Get Started</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col my-2 gap-5 p-5'>
            <div className='flex flex-col p-5 gap-5 rounded-lg border'>
                <h2 className='text-lg text-white'><strong>Oral Exam Topic:</strong> {examData.examTitle}</h2>
                <h2 className='text-lg text-white'><strong>Oral Exam Description:</strong> {examData.examDesc}</h2>
                <h2 className='text-lg text-white'><strong>Oral Proficiency Level:</strong> {examData.examLevel}</h2>
            </div>

            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
                <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INTERVIEW_INFORMATION}</h2>
            </div>
        </div>

        <div>
            {webcamEnabled ? 
                <Webcam 
                    onUserMedia={() => setWebcamEnabled(true)}
                    onUserMediaError={() => setWebcamEnabled(false)}
                    mirrored={true}
                    style={{
                        height: 300,
                        width: 300,
                    }}
                />
            :
            <>
                <WebcamIcon className='h-80 w-full my-7 p-20 bg-secondary rounded-lg border'/>
                <Button className="w-full bg-white text-black hover:bg-gray-200" onClick={() => setWebcamEnabled(true)}>Enable Webcam and microphone</Button>
            </>
            }
        </div>
    </div>
    
    <div className='w-full flex justify-end mt-5'>
        <Link href={'/dashboard/exam/'+params.examId+'/start'}>
            <Button className="bg-white text-black hover:bg-gray-200">Start Exam</Button>
        </Link>
    </div>
</div>
  )
}

export default Exam