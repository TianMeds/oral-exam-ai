'use client'
import { db } from '../../utils/db';
import { OralExam } from '../../utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import ExamCard from '../_components/ExamCard';

const ExamList = () => {

    const  {user} = useUser();
    const [examList, setExamList] = useState([]);

    useEffect(() => {
        user&&GetExamList();
    }, [user])

    const GetExamList = async() => {
        const result = await db.select()
        .from(OralExam)
        .where(eq(OralExam.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(OralExam.id))

        console.log(result);
        setExamList(result);
    }
  return (
    <div>
        <h2 className='font-medium text-xl text-white'>Previous Oral Exam</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {examList&&examList.map((exam, index) => (
                <ExamCard key={index} exam={exam}/>
            ))}
        </div>
    </div>
  )
}

export default ExamList