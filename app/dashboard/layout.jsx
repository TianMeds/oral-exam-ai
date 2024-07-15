import React from 'react'
import Header from '../_components/Header'
import Head from 'next/head'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default DashboardLayout