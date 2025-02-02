import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import PlusIcon  from '../../public/icons/plus.svg'

const Incidents = () => {
  return (
    <>
      <Navbar/>
      <Search breadcrumb="Home - Incidents" title='Incidents' buttonIcon={PlusIcon} button='New Incident'/>
    </>
  )
}

export default Incidents