import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Modal from "react-modal";
import Shifts from "./components/Shifts";
import Home from "./components/Home";
import Settings from "./components/Settings";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="shifts" element={<Shifts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
