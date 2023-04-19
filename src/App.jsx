import { Suspense } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects.jsx';

function App() {
  return (
    <Suspense fallback={<div>loading... </div>}>
      <Header />
      <main>
        <Home />
        <Projects />
      </main>
    </Suspense>
  );
}

export default App;
