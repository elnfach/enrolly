
import '@styles/app.css'
import Home from "./pages/home/home.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about/about.tsx";
import NotFound from "./pages/404/404.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <>
        <Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        <Footer/>
    </>
  )
}

export default App
