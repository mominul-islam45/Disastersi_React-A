import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Cards from "../components/Cards";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* Search section - importing details through provs */}
      <Search breadcrumb="Welcome back" title="Dashboard" button="Cypher AI" />
      {/* Contents cards */}
      <Cards/>
    </>
  );
};

export default Dashboard;
