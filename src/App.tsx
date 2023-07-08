import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsTraining from "./components/EventsTraining";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="events" element={<EventsTraining />} />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
