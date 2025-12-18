import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Main from "./pages/Main/Main.jsx";
import Products from "./pages/Products/Products.jsx";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
