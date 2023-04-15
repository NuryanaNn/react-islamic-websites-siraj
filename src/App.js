
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import './style/style.css'
import Pillar from './components/Pillar';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Prayer from './components/Prayer';
import Event from './components/Event';
import Causes from './components/Causes';
import Counters from './components/Counters';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="HeroSection">
        <Hero/>
      </div>
      <div className="aboutUsSection">
        <About/>
      </div>
      <div className="serviceSection">
        <Service/>
      </div>
      <div className="pillarSection">
        <Pillar/>
      </div>
      <div className="gallerySection">
        <Gallery/>
      </div>
      <div className="teamSection">
        <Team/>
      </div>
      <div className="prayerSection">
        <Prayer/>
      </div>
      <div className="eventSection">
        <Event/>
      </div>
      <div className="causesSection">
        <Causes/>
      </div>
      <div className="countersSection">
        <Counters/>
      </div>
      <div className="testimonialSection">
        <Testimonial/>
      </div>
      <div className="footerSection">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
