import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import PlusIcon  from '../../public/icons/plus.svg'
import Cards from '../components/Cards'

const Incidents = () => {
  return (
    <>
      <Navbar/>
      {/* Search section - importing details through provs */}
      <Search breadcrumb="Home - Incidents" title='Incidents' buttonIcon={PlusIcon} button='New Incident'/>
      {/* Contents cards */}
      <Cards/>
    </>
  )
}

export default Incidents