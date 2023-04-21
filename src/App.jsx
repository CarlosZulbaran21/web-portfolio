import { Suspense } from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Contact from './pages/Contact/Contact.jsx';

function App() {
  return (
    <Suspense fallback={<div>loading... </div>}>
      <Header />
      <main>
        <Home />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
    </Suspense>
  );
}

export default App;
