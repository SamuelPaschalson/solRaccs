import './App.css';
import About from './components/About';
import Buy from './components/Buy';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Nabar';
import Purchase from './components/Purchase';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';

function App() {
  return (
    <div className="relative from-gray-900 via-purple-950 to-gray-900">
      {/* <div className="absolute top-[30rem] right-[-10rem] w-80 h-80 gradient-element"></div>
      <div className="absolute bottom-[20rem] left-[-10rem] w-80 h-80 gradient-element"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 gradient-element rounded-full blur-3xl"></div> */}
      <div className="absolute gradient-element w-64 h-64 bottom-[25rem] right-3/4"></div>
      {/* <div className="absolute gradient-element w-80 h-80 bottom-[-10rem] right-[-5rem]"></div> */}
      {/* <div className="absolute gradient-element w-96 h-96 top-[-4rem] left-[-10rem]"></div>
      <div className="absolute gradient-element w-64 h-64 top-1/3 right-1/4"></div>
      <div className="absolute gradient-element w-72 h-72 bottom-1/4 left-1/3"></div>
      <div className="absolute gradient-element w-52 h-52 top-20 right-20"></div>
      <div className="absolute gradient-element w-60 h-60 bottom-[15rem] right-[2rem]"></div> */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Purchase />
        <About />
        <Feature />
        <Buy />
        <Tokenomics />

        <Roadmap />
        <FAQ id="#faq" />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;
