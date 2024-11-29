import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import main_img from './assets/main_img.jpg';
import Hero from './components/ui/Hero';
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive.css'
import About from './components/About';
function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      smoothMobile: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container className="w-full h-full relative">
      <NavBar />
      <Hero />
        <div
          className="w-full h-screen flex items-center justify-center overflow-hidden px-10"
          data-scroll
          data-scroll-section
          data-scroll-speed="-8.2">
          <img
            src={main_img}
            alt="..."
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div>
      <About />
    </div>
  );
}

export default App;
