import React from 'react'
import { Lightbulb, Volume2 } from 'lucide-react'

const QuestionSection = ({examQuestion, questionIndex}) => {

    if (!examQuestion) {
        return null; // or return a loading spinner/message
      }
    
      const textToSpeach=(text) => {
        if('speechSynthesis' in window) {
            const speech=new  SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
        else{
            alert('Sorry, your browser does not support text to speech')
        }
      }

  return (
    <div className='p-5 border rounded-lg my-10 bg-gray-900 text-white'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {examQuestion.map((question, index) => (
          <h2
            key={index}
            className={`p-2 border-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${questionIndex === index && 'bg-blue-700 text-white border-blue-700'}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      {examQuestion[questionIndex] && (
        <>
          <h2 className='my-5 text-md md:text-lg'>{examQuestion[questionIndex].question}</h2>
          <Volume2 className='cursor-pointer' onClick={() => textToSpeach(examQuestion[questionIndex].question)} />
        </>
      )}

      <div className='border rounded-lg p-5 bg-blue-800 mt-8'>
        <h2 className='flex items-center text-blue-200'>
          <Lightbulb className='h-6 w-6 mr-2' />
          <strong>Note:</strong>
        </h2>
        <p className='text-sm text-blue-200 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</p>
      </div>
    </div>
  )
}

export default QuestionSection