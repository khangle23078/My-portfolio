import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Project from './components/Project';
import { contact } from './data/contact';
import { education } from './data/education';
import { experiences } from './data/experience';
import { projects } from './data/project';

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <About />
      <Project projects={projects} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Contact contacts={contact} />
    </div>
  );
}

export default App;
