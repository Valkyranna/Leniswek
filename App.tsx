import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black font-sans">
        <Navigation />
        <main>
          <Routes>
            {/* Home Route now renders the full experience */}
            <Route path="/" element={
              <>
                <Hero />
                <Music />
                <About />
                <Contact />
              </>
            } />
            
            {/* Separate Pages with padding to account for fixed navbar */}
            <Route path="/music" element={<div className="pt-24"><Music /></div>} />
            <Route path="/about" element={<div className="pt-24"><About /></div>} />
            <Route path="/contact" element={<div className="pt-24"><Contact /></div>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;