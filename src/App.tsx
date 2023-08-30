import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
