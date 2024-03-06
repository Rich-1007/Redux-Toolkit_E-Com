import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen ">
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div className="bottom-0 relative">
        <Footer />
      </div>
    </div>
  );
}

export default App;
