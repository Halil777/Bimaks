import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/index/Index";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import TechnicalSolutions from "./pages/technicalSolutions/TechnicalSolutions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/technical-solutions"
              element={<TechnicalSolutions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
