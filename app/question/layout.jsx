import React from 'react'
import Header from '../_components/Header'
import Head from 'next/head'

const QuestionLayout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default QuestionLayout