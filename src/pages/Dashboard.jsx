import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Dashboard = () => {
  return (
    <>
        <Navbar/>
        <Search breadcrumb="Welcome back" title='Dashboard' button="Cypher AI"/>
    </>
  )
}

export default Dashboard