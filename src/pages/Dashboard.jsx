import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Cypher_AI from "../components/Cypher_AI";

const Dashboard = () => {
  // State for Cypher Ai - on button toggle
  const [isCypherOpen, setIsCypherOpen] = useState(false)
  const handleClick = ()=>{
    setIsCypherOpen(!isCypherOpen)
  }

  return (
    <>
      <Navbar />
      {/* Search section - importing details through provs */}
      <Search breadcrumb="Welcome back" title="Dashboard" button="Cypher AI" />
      {/* Contents cards */}
      <Cards/>
      {/* Cypher AI chat-box*/}
      <div className='fixed right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-20 bottom-5 z-50 flex flex-col items-end gap-3'>
          {isCypherOpen && <Cypher_AI/>}
          {/* Cypher toggle button */}
          <button onClick={handleClick} className={`size-[50px] sm:size-[70px] flex justify-center items-center cursor-pointer rounded-full ${isCypherOpen? 'bg-white shadow-lg shadow-orange/40 border border-orange/50': 'bg-orange animate-bounce'}`}>
            <img src={`${isCypherOpen ? 'icons/close_v2.svg':'icons/cypher.svg'}`} alt="Icon" />
          </button>
      </div>
    </>
  );
};

export default Dashboard;
