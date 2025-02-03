import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import PlusIcon  from '../../../public/icons/plus.svg'
import Cards from '../../components/Cards'
import Step_2AddIncident from './Step_2AddIncident'

const Incidents = () => {
  const [isContentOpen, setIsContentOpen] = useState(true)
  const [isAddIncidentOpen, setIsAddIncidentOpen] = useState(false)

  const addIncident = ()=> {
    setIsAddIncidentOpen(!isAddIncidentOpen);
    setIsContentOpen(!isContentOpen)
  }

  return (
    <>
      <Navbar/>
      {isContentOpen && (
        <>
          {/* Search section - importing details through provs */}
          <Search breadcrumb="Home - Incidents" title='Incidents' button='New Incident' buttonIcon={PlusIcon} buttonOnClick={addIncident}/>
          {/* Contents cards */}
          <Cards/>
        </>
      )}
      {isAddIncidentOpen && <Step_2AddIncident/>}
    </>
  )
}

export default Incidents