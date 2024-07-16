'use client'
import React, {useEffect, useState} from 'react'
import { db } from '../../../../../utils/db'
import { OralExam } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link'
import { Button } from '../../../../../components/ui/button';
import QuestionSection from '../../../../_components/QuestionSection';
import AnswerSection from '../../../../_components/AnswerSection';

const StartExamination = ({params}) => {

  const [examData, setExamData] = useState(null);
    const [examQuestion, setExamQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);

    useEffect(() => {
        GetExamDetails();
    }, [params.examId]) 

    const GetExamDetails = async() => {
        try {
            const result = await db.select().from(OralExam)
                .where(eq(OralExam.examId, params.examId));

            if (result && result.length > 0) {
                const jsonOralResp = JSON.parse(result[0].jsonOralResp);
                console.log(jsonOralResp)
                setExamQuestion(jsonOralResp)
                setExamData(result[0])
            } else {
                console.error("No data found for the given exam ID");
            }
        } catch (error) {
            console.error("Error fetching exam details:", error);
        }
    }


  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <QuestionSection 
            examQuestion={examQuestion}
            questionIndex={questionIndex}
        />

        <AnswerSection
            examQuestion={examQuestion}
            questionIndex={questionIndex}
            examData={examData}
        />
    </div>
    <div className='flex justify-end gap-6'>
        {questionIndex > 0 &&  
            <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setQuestionIndex(questionIndex-1)}>Previous Question</Button> 
        }
       
        {questionIndex != examQuestion?.length-1 &&  
            <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setQuestionIndex(questionIndex+1)}>Next Question</Button> 
            
        }
        {questionIndex == examQuestion?.length-1 &&  

            <Link href={'/dashboard/exam/'+examData?.examId+"/feedback"}>
                <Button className="bg-white text-black hover:bg-gray-200" onClick>End Exam</Button> 
            </Link>
        }
    </div>
</div>
  )
}

export default StartExamination