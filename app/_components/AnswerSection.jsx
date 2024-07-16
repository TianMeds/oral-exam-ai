'use client'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Mic, WebcamIcon } from 'lucide-react'
import { Button } from '../../components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text'
import { toast } from 'sonner'
import { chatSession } from '../../utils/GeminiAIModal'
import { useUser } from '@clerk/nextjs'
import WebcamImage from '../../public/Webcam.svg'
import { UserAnswer } from '../../utils/schema'
import moment from 'moment'


const AnswerSection = ({examQuestion, examData, questionIndex}) => {

    const [userAnswer, setUserAnswer] = useState('');
    const {user} = useUser();
    const [loading, setLoading] = useState(false);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

      useEffect(() => {
        results.map((result) => (
            setUserAnswer(prevAns=>prevAns+result?.transcript)
        ))
      }, [results])

      useEffect(() => {
        if(!isRecording&&userAnswer.length>10) {
            UpdateUserAnswer();
        }
        if(userAnswer?.length<10){
            setLoading(false)
            toast('Error while saving your answer. Please record again.')
            return;
        }
      }, [userAnswer])


      const SaveUserAnswer = async() => {
        if(isRecording) {
            stopSpeechToText();
        }
        else{
            startSpeechToText();
        }
      }

      const UpdateUserAnswer = async()=>{

            console.log(userAnswer)

            setLoading(true)
            const feedbackPrompt = "Question: "+ examQuestion[questionIndex].question+ ", User Answer:"+ userAnswer + ", Depends on question and user answer for give exam question" + " please give us rating for answer and feedback as area of improvement if any " + "in just 3 to 5 lines to improve it in JSON format with rating  field and feedback field";

            const result = await chatSession.sendMessage(feedbackPrompt);

            const oralJsonResp=(result.response.text()).replace('```json', '').replace('```', '');

            console.log(oralJsonResp)

            const JsonFeedbackResp = JSON.parse(oralJsonResp);

            const resp = await db.insert(UserAnswer)
            .values({
                examIdRef:examData?.examId,
                question: examQuestion[questionIndex].question,
                answer: examQuestion[questionIndex].answer,
                userAns: userAnswer,
                feedback: JsonFeedbackResp?.feedback,
                rating:  JsonFeedbackResp?.rating,
                userEmail:user?.primaryEmailAddress?.emailAddress,
                createdAt:moment().format('DD-MM-yyyy')
            })

            if (resp) {
                toast('User Answer recorded successfully')
                setUserAnswer('');
                setResults([]);
            }
            setResults([]);
            setLoading(false);
      }


  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
        <Image src={WebcamImage} width={200} height={200} className='absolute' alt='Camera Icon'/>
        <Webcam
            mirrored={true}
            style={{
                height:300,
                width:'100%',
                zIndex:10,
            }}
        />
    </div>
    <Button
    disabled={loading}
    variant="outline" className="my-10"
    onClick={SaveUserAnswer}
    >
        {isRecording ? 
            <h2 className='text-red-600 flex gap-2'>
                <Mic/> Stop Recording
            </h2>    

            :
            'Record Answer'
        }
    </Button>
</div>
  )
}

export default AnswerSection