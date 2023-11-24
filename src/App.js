import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Analytics />
    </div>
  );
}

export default App;
