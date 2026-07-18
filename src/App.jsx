import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Experience from './pages/Experience'
import MultiBall from './pages/MultiBall'
import XWall from './pages/XWall'
import SoccerTable from './pages/SoccerTable'
import EventSolutions from './pages/EventSolutions'
import SportSolutions from './pages/SportSolutions'
import EducationSolutions from './pages/EducationSolutions'
import Gallery from './pages/Gallery'
import Videos from './pages/Videos'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0e1a] text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/multiball" element={<MultiBall />} />
            <Route path="/x-wall" element={<XWall />} />
            <Route path="/soccer-table" element={<SoccerTable />} />
            <Route path="/event-solutions" element={<EventSolutions />} />
            <Route path="/sport-solutions" element={<SportSolutions />} />
            <Route path="/education-solutions" element={<EducationSolutions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
