import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Incidents from "./pages/Incidents";
import Locations from "./pages/Locations";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Incidents" element={<Incidents />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
