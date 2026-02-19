import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Tokenomics } from './components/Tokenomics';
import { Presale } from './components/Presale';
import { LaunchRoadmap } from './components/LaunchRoadmap';
import { Roadmap } from './components/Roadmap';
import { Gallery } from './components/Gallery';
import { Community } from './components/Community';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Tokenomics />
        <Presale />
        <LaunchRoadmap />
        <Roadmap />
        <Gallery />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
