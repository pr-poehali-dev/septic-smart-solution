
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import "./App.css"
import NotFound from "./pages/NotFound"
import HomePage from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
