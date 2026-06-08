import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Game from "./components/Game";

function App() {

return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/game" element={<Game />} />
  </Routes>
  
  
  </BrowserRouter>


)




}