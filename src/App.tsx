import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { GameProjects } from './sections/GameProjects';
import { WebProjects } from './sections/WebProjects';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="projects">
          <GameProjects />
          <WebProjects />
        </div>
        <Achievements />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
