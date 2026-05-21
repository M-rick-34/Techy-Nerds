import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlanetSection from './components/PlanetSection';
import VideoSection from './components/VideoSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlanetSection />
      <VideoSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;