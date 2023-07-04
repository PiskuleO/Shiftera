import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventsTraining from "./components/EventsTraining";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="events" element={<EventsTraining />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
