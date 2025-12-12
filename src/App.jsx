import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StaggeredMenu from './components/StaggeredMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
  { label: 'Gallery', ariaLabel: 'View Gallery', link: '/gallery' },
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'Pinterest', link: 'https://pinterest.com' }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col overflow-hidden">
        {/* Fixed Navigation */}
        <div className="fixed top-0 left-0 w-full z-50">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            openMenuButtonColor="transparent"
            closeMenuButtonColor="transparent"
            displayItemNumbering={true}
            menuButtonColor="#0E38B1"
            accentColor="#0E38B1"
          />
        </div>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
