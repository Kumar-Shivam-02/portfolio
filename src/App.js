// App.css is css for div inside the body
import './App.css';
import './mediaqueries.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavbarDesktop from "./components/NavbarDesktop.js"
import NavbarMobile from "./components/NavbarMobile.js"
import Profile from "./components/Profile.js"
import About from "./components/About.js"
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavbarDesktop />
      <NavbarMobile />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
