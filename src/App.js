// App.css is css for div inside the body
import './App.css';
import './mediaqueries.css';
import { Analytics } from '@vercel/analytics/react';
import NavbarDesktop from "./components/NavbarDesktop.js"
import NavbarMobile from "./components/NavbarMobile.js"

function App() {
  return (
    <div className="App">
      <NavbarDesktop />
      <NavbarMobile/>
      <Analytics />
    </div>
  );
}

export default App;
