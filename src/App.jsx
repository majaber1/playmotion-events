import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import MultiBall from './pages/MultiBall'
import XWall from './pages/XWall'
import SoccerTable from './pages/SoccerTable'
import EventSolutions from './pages/EventSolutions'
import Gallery from './pages/Gallery'
import Videos from './pages/Videos'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import AIExperiencePlatform from './pages/AIExperiencePlatform'

function App() {
  return (
    <Router basename="/playmotion-events">
      <div className="min-h-screen bg-[#0a0e1a] text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ai-experience-platform" element={<AIExperiencePlatform />} />
            <Route path="/multiball" element={<MultiBall />} />
            <Route path="/x-wall" element={<XWall />} />
            <Route path="/soccer-table" element={<SoccerTable />} />
            <Route path="/event-solutions" element={<EventSolutions />} />
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
