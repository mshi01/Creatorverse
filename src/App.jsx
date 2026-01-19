import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllCreators from "./pages/AllCreators"
import CreatorDetail from "./pages/CreatorDetail"
import AddCreator from "./pages/AddCreator"
import EditCreator from "./pages/EditCreator"
import DeleteConfirm from "./pages/DeleteConfirm"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<AllCreators />} />
        <Route path="/creators/:id" element={<CreatorDetail />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/delete/:id" element={<DeleteConfirm />} />
      </Routes>
    </BrowserRouter>
  )
}